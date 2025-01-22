import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

/**
 * Data Transfer Object for fetching user parameters.
 * - Used to specify optional parameters when retrieving user data.
 * - Supports Swagger documentation and validation.
 */
export class GetUsersParamDto {
  /**
   * Optional user ID for fetching a specific user.
   * - If provided, the API will return data for the user with the given ID.
   * - Decorated with validation rules to ensure it's an integer.
   *
   * @example 1
   * @description Get user with a specific ID.
   */
  @ApiPropertyOptional({
    description: 'Get user with specific id',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
