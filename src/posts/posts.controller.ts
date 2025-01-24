import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dots/create-post.dto';
import { PatchPostDto } from './dots/patch-post.dto';
import { getPostsDto } from './dots/get-posts.dto';
/**
 * Post controller for managin posts business operations
 * @controller
 */
@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  /**
   * Constructor
   * @param postsService
   */
  constructor(private readonly postsService: PostsService) {}
  /**
   * Method to get posts of a speciif user or randomly all
   */
  @Get('/:userId?')
  public getPosts(
    @Param('userId') userId: string,
    @Query() postQuery: getPostsDto,
  ) {
    return this.postsService.findAll(userId, postQuery);
  }

  /**
   * This is for creating post
   * @param createPostDto
   * @returns createPostDto
   */
  @ApiOperation({
    summary: 'Creates a new post',
  })
  @ApiResponse({
    status: 201,
    description: 'Your post has been created successfully',
    type: CreatePostDto,
  })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
    return this.postsService.createPost(createPostDto);
  }

  /**
   * update a post
   * @param patchPostDto
   */
  @ApiOperation({
    summary: 'Updates an existing blog post',
  })
  @ApiResponse({
    status: 200,
    description: 'Your post has been updated successfully',
    type: PatchPostDto,
  })
  @Patch()
  public updatePost(@Body() patchPostDto: PatchPostDto) {
    return this.postsService.updatePost(patchPostDto);
  }

  @Delete()
  public deletePost(@Query('id', ParseIntPipe) id: number) {
    return this.postsService.deletePost(id);
  }
}
