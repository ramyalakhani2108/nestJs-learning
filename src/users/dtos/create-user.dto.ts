import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

/**
 * DTO (Data Transfer Object) for creating a new user.
 * This class validates the structure and properties of a user creation request.
 */
export class CreateUserDto {
  /**
   * The first name of the user.
   * - Must be a string.
   * - Cannot be empty.
   * - Must be between 3 and 50 characters.
   * @example 'John'
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  firstName: string;

  /**
   * The last name of the user.
   * - Must be a string.
   * - Optional field.
   * - Must not exceed 50 characters if provided.
   * @example 'Doe'
   */
  @IsString()
  @IsOptional()
  @MaxLength(96)
  lastName?: string;

  /**
   * The email address of the user.
   * - Must be a valid email format.
   * - Cannot be empty.
   * @example 'john.doe@example.com'
   */
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(96)
  email: string;

  /**
   * The password for the user account.
   * - Must be a string.
   * - Cannot be empty.
   * - Must be at least 8 characters long.
   * - Must include:
   *   - At least one uppercase letter.
   *   - At least one lowercase letter.
   *   - At least one digit.
   *   - At least one special character (@$!%*?&).
   * @example 'P@ssw0rd123!'
   */
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(96)
  // @Matches(
  //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //   {
  //     message:
  //       'Minimum 8 chars at least one letter, number and special characters',
  //   },
  // )
  password: string;
}
