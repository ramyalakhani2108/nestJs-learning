import {
  BadRequestException,
  Body,
  HttpException,
  HttpStatus,
  Injectable,
  RequestTimeoutException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/providers/users.service';
import { Post } from '../post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dots/create-post.dto';
import { MetaOption } from 'src/meta-options/meta-option.entity';
import { TagsService } from 'src/tags/providers/tags.service';
import { PatchPostDto } from '../dots/patch-post.dto';
import { getPostsDto } from '../dots/get-posts.dto';
import { PaginationProvider } from 'src/common/pagination/providers/pagination.provider';
import { Paginated } from 'src/common/pagination/interfaces/paginated.interface';

/**
 * Service responsible for managing posts.
 * - Provides methods for retrieving and creating posts.
 * - Uses dependency injection to interact with the `UsersService`.
 */
@Injectable()
export class PostsService {
  /**
   * Constructor for `PostsService`.
   * - Injects the `UsersService` to allow interaction with user data.
   * @param usersService - Service for handling user-related operations.
   */
  constructor(
    private readonly usersService: UsersService, // dependency injection is used to inject services into controllers and other components.
    @InjectRepository(Post)
    private postsRepository: Repository<Post>, // Corrected the typo here
    @InjectRepository(MetaOption)
    private metaOptionsRepository: Repository<MetaOption>, // Corrected the typo here
    private readonly tagService: TagsService,
    private readonly paginationProvider: PaginationProvider,
  ) {}

  /**
   * Retrieves all posts for a given user.
   * - Fetches user data using the `UsersService`.
   * - Constructs a list of posts associated with the user.
   * @param userId - The ID of the user for whom posts are to be fetched.
   * @returns An array of posts, each containing the user, title, and content.
   * @example
   * findAll('12345');
   */
  public async findAll(
    userId: string,
    postQuery: getPostsDto,
  ): Promise<Paginated<Post>> {
    // user service
    const posts = await this.paginationProvider.paginationQuery(
      {
        limit: postQuery.limit,
        page: postQuery.page,
      },
      this.postsRepository,
    ); //relations also all the defined options

    return posts;
  }

  /**
   * Creates a new post.
   * - Simulates the creation of a post.
   * @returns A success message indicating the post was created.
   * @example
   * createPost(); // "Post created successfully"
   */
  public async createPost(@Body() createPostDto: CreatePostDto) {
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
      author = await this.usersService.findOneById(createPostDto.authorId);
    } catch (error) {
      console.log(error);
      throw new RequestTimeoutException('Unable to process your request');
    }

    if (!author) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User not found',
          fileName: 'posts.service.ts',
          lineNumber: 91,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    // create tags
    let tags = undefined;
    try {
      tags = await this.tagService.findMultipleTags(createPostDto.tags);
    } catch (error) {
      console.log(error);
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
    } catch (error) {
      console.log(error);
      throw new RequestTimeoutException('Unable to process your request', {
        description: 'Please try again later',
      });
    }
  }

  public async deletePost(postId: number) {
    // find the post
    // const post = await this.postsRepository.findOneBy({ id: postId });
    // BiDirectional one to one relationship
    // const inversePost = await this.metaOptionsRepository.find({
    //   where: { id: post.metaOptions.id },
    //   relations: {
    //     post: true,
    //   },
    // }); // finding metaoptions first using the post and post using the metaoptions
    // console.log(inversePost);
    // uni-directional one to one relationship
    // deleting post because meta option are the foreign key
    // await this.postsRepository.delete(postId);
    //delete meta optionsfrom the
    // await this.metaOptionsRepository.delete(post.metaOptions.id);

    // delete using cascade
    await this.postsRepository.delete(postId); //this will delete the metaoptions also
    // confirmation
    return { deleted: true, id: postId };
  }

  public async updatePost(patchPostDto: PatchPostDto) {
    let tags = undefined;
    let post = undefined;
    try {
      // find the tags
      tags = await this.tagService.findMultipleTags(patchPostDto.tags);
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: 'Error communicating with the database',
          cause: error,
        },
      );
    }

    if (!tags || tags.length !== patchPostDto.tags.length) {
      throw new BadRequestException('Please check the tags id you have sent');
    }
    // find the post
    try {
      post = await this.postsRepository.findOneBy({ id: patchPostDto.id });
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: 'Error communicating with the database',
          cause: error,
        },
      );
    }

    if (!post) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'The post not found',
          fileName: 'posts.service.ts',
          lineNumber: 150,
        },
        HttpStatus.NOT_FOUND,
        {
          cause: console.log('The post not found in the database'),
        },
      );
    }
    // update the properties of the post
    post.title = patchPostDto.title ?? post.title; //if post is sent then update otherwise use the existing one
    post.postType = patchPostDto.postType ?? post.postType;
    post.slug = patchPostDto.slug ?? post.slug;
    post.status = patchPostDto.status ?? post.status;
    post.content = patchPostDto.content ?? post.content;
    post.schema = patchPostDto.schema ?? post.schema;
    post.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post.featuredImageUrl;
    post.publishedOn = patchPostDto.publishedOn ?? post.publishedOn;

    // assign the new tags
    post.tags = tags;

    // save the updated post and return it
    try {
      return await this.postsRepository.save(post);
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request at the moment please try later',
        {
          description: 'Error communicating with the database',
          cause: error,
        },
      );
    }
  }
}
