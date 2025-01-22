import { IsJSON, IsNotEmpty } from 'class-validator';
/**
 * DTO (Data Transfer Object) for defining meta options of a blog post.
 * This class is used to validate the structure and values of each meta option object.
 */
export class CreatePostMetaOptionsDto {
  @IsNotEmpty()
  @IsJSON()
  metaValue: string;
}
