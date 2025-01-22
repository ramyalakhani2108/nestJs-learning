import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

/**
 * Dto for patch post input data mapping type of the create post dto
 */
export class PatchPostDto extends PartialType(CreatePostDto) {
  /**
   * Id of the post for updating the post
   */
  @ApiProperty({
    description: 'The id of the blog post to update',
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}
