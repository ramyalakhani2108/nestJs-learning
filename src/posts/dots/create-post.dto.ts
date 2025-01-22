import { Type } from 'class-transformer';
import {
  IsArray,
  //   IsDate,
  IsEnum,
  IsInt,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { PostType } from '../enums/postType.enum';
import { Status } from '../enums/postStatus.enum';
import { CreatePostMetaOptionsDto } from '../../meta-options/dtos/create-post-metaoptions.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
/**
 * DTO (Data Transfer Object) for creating a new blog post.
 * This class defines the structure and validation rules for the data
 * required to create a new blog post.
 */
export class CreatePostDto {
  /**
   * The title of the blog post.
   * - Must be a string.
   * - Cannot be empty.
   * - Must have a minimum length of 4 characters.
   * @example 'My First Post'
   */
  @ApiProperty({
    description: 'This is the title of the blog post',
    example: 'My First Post',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(512)
  title: string;

  /**
   * The type of the post.
   * - Must be one of the enum values: `post`, `story`, `page`, or `series`.
   * - Cannot be empty.
   * @example 'post'
   */
  @ApiProperty({
    enum: PostType,
    description: 'it can be post, story, page, series',
  })
  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType;

  /**
   * The slug of the blog post.
   * - Must be a string.
   * - Cannot be empty.
   * - Must match the specified regex for valid slugs.
   * @example 'my-first-post'
   */
  @ApiProperty({
    description: 'This is the slug of the blog post',
    example: 'my-first-post',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'Slug should only contain lowercase alphanumeric characters and hyphens, and must not start or end with a hyphen.',
  })
  @MaxLength(256)
  @MinLength(3)
  slug: string;

  /**
   * The status of the blog post.
   * - Must be one of the enum values: `draft`, `schedule`, `review`, or `published`.
   * - Cannot be empty.
   * @example 'draft'
   */
  @ApiProperty({
    enum: Status,
    description: 'draft, schedule, review, published',
  })
  @IsEnum(Status)
  @IsNotEmpty()
  status: Status;

  /**
   * The content of the blog post (optional).
   * - Must be a string if provided.
   * @example 'This is the content of my first post.'
   */
  @ApiPropertyOptional({
    description: 'This is the content of the blog post',
    example: 'This is the content of my first post.',
  })
  @IsString()
  @IsOptional()
  content?: string;

  /**
   * The schema of the blog post (optional).
   * - Must be valid JSON if provided.
   * @example '{ "@context": "https://schema.org", "@type": "Person" }'
   */
  @ApiPropertyOptional({
    description: 'This is the schema of the blog post',
    example:
      '{\r\n "@context": "https:V\/schema.org", \r\n "@type": "Person"\r\n }',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  /**
   * The featured image URL of the blog post (optional).
   * - Must be a valid URL if provided.
   * @example 'https://example.com/featured-image.jpg'
   */
  @ApiPropertyOptional({
    description: 'This is the featured image url of the blog post',
    example: 'https://example.com/featured-image.jpg',
  })
  @IsOptional()
  @IsUrl()
  @MaxLength(1024)
  featuredImageUrl?: string;

  /**
   * The ISO8601 date when the blog post was published (optional).
   * - Must be a valid ISO8601 date string if provided.
   * @example '2022-01-01T12:00:00Z'
   */
  @ApiPropertyOptional({
    description: 'This is the date in ISO8601 when the blog post was published',
    example: '2022-01-01T12:00:00Z',
  })
  @IsOptional()
  @IsISO8601()
  publishedOn?: Date;

  /**
   * Tags for the blog post (optional).
   * - Must be an array of strings if provided.
   * - Each string must have a minimum length of 3 characters.
   * @example ['tag1', 'tag2', 'tag3']
   */
  @ApiPropertyOptional({
    description: 'Array of ids of tags tags passed',
    example: [1, 2, 3, 4, 5],
  })
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  tags?: number[];

  /**
   * Metadata options for the blog post (optional).
   * - Must be an array of objects, each with `key` and `value` properties.
   * - Each object is validated against the `CreatePostMetaOptionsDto` class.
   * @example [
   *   { key: 'option1', value: 'value1' },
   *   { key: 'option2', value: 'value2' },
   *   { key: 'option3', value: 'value3' }
   * ]
   */
  @ApiPropertyOptional({
    type: 'object',
    required: false,
    items: {
      type: 'object',
      properties: {
        metaValue: {
          type: 'json',
          description: 'This is type of json string',
          example: '{"sidebarEnabled" : true}',
        },
      },
    },
  })
  @IsOptional()
  @ValidateNested({ each: true }) // each value of the array is included for validaiotn
  @Type(() => CreatePostMetaOptionsDto) // use class-transformer to transform the object to CreatePostMetaOptionsDtor for validaiton
  metaOptions?: CreatePostMetaOptionsDto | null; // Array of objects with key-value pairs

  @ApiProperty({
    type: 'integer',
    required: true,
    example: 1,
  })
  @IsInt()
  @IsNotEmpty()
  authorId: number;
}
