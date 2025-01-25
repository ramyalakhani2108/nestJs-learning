import {
  BadRequestException,
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { CreatePostDto } from '../dots/create-post.dto';
import { Repository } from 'typeorm';
import { Post } from '../post.entity';
import { UsersService } from 'src/users/providers/users.service';
import { TagsService } from 'src/tags/providers/tags.service';
import { InjectRepository } from '@nestjs/typeorm';
import { ActiveUserData } from 'src/auth/interfaces/active-user-data.interface';

@Injectable()
export class CreatePostProvider {
  constructor(
    private readonly tagService: TagsService,
    private readonly usersService: UsersService, // injecting users service
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ) {}
  public async createPost(
    @Body() createPostDto: CreatePostDto,
    user: ActiveUserData,
  ) {
    // create metaoptions
    // removing meta options creation because of cascade
    // const metaOptions = createPostDto.metaOptions
    //   ? this.metaOptionsRepository.create(createPostDto.metaOptions)
    //   : null;

    // if (metaOptions) {
    //   await this.metaOptionsRepository.save(metaOptions);
    // }

    // create post
    // find the post
    let post = undefined;
    try {
      post = await this.postsRepository.findOneBy({ slug: createPostDto.slug });
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: 'Error communicating with the database',
          cause: error,
        },
      );
    }

    if (post) {
      throw new BadRequestException('Post already Exists', {
        description: 'Post already exist try again with a different slug',
      });
    }

    //find author using author id
    let author = undefined;
    try {
      author = await this.usersService.findOneById(user.sub);
    } catch {
      throw new RequestTimeoutException('Unable to process your request');
    }

    // if (!author) {
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.NOT_FOUND,
    //       error: 'User not found',
    //       fileName: 'posts.service.ts',
    //       lineNumber: 91,
    //     },
    //     HttpStatus.NOT_FOUND,
    //   );
    // } //because of authorization has been handled

    // create tags
    let tags = undefined;
    try {
      tags = await this.tagService.findMultipleTags(createPostDto.tags);
    } catch {
      throw new RequestTimeoutException(
        'Unable to process your request. Please try again later',
        {
          description: 'Unable to process your request. Please try again later',
        },
      );
    }

    if (tags.length !== createPostDto.tags.length) {
      throw new BadRequestException('Please check the tags id you have sent');
    }

    // create post
    post = this.postsRepository.create({
      ...createPostDto,
      author: author,
      tags: tags,
    }); //assigning the author we found using create post dto
    // add metaoptions to the post
    // if (metaOptions) {
    //   post.metaOptions = metaOptions;
    // }

    // return posts to the user
    try {
      return await this.postsRepository.save(post);
    } catch {
      throw new RequestTimeoutException('Unable to process your request', {
        description: 'Please try again later',
      });
    }
  }
}
