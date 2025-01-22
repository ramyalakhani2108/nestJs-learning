import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

/**
 * DTO for patching/updating user data.
 *
 * This class extends `PartialType(CreateUserDto)` to inherit all properties from `CreateUserDto`,
 * but makes all properties optional. This is useful for handling partial updates where not all fields need to be provided.
 */
export class PatchUserDto extends PartialType(CreateUserDto) {
  // the partial type is a mapped type which helps this dto to get the all properties of CreateUserDto
  // yet it makes all the properties of CreateUserDto optional
}
