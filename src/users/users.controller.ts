import {
  Body,
  Controller,
  Get,
  // Headers,
  // Ip,
  Param,
  Post,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
  Patch,
  // ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { Req } from '@nestjs/common';
// import {Request} from 'express';

/**
 * Controller for managing user-related operations.
 * - Handles incoming HTTP requests for user data.
 * - Implements routes for retrieving, creating, and updating users.
 */
@Controller('users')
@ApiTags('Users')
export class UsersController {
  /**
   * Dependency Injection of UsersService.
   * @param usersService - Provides methods to interact with user data.
   */
  constructor(
    //injecting userService dependency
    private readonly usersService: UsersService,
  ) {}

  // Approach 1 to get the params
  //   @Get('/:id') ///:id?->will make it not required // this is the decorator for handling GET requests
  //   public getUsers(@Param() params: any, @Query() query: any) {
  //     console.log(params);
  //     console.log(query);
  //     return 'You have sent a get request to users endpoint';
  //   }

  //   @Get('/:id/:optional?')
  //   public getUsers(@Param('id') id: any, @Query('limit') limit: any) {
  //     console.log(id);
  //     console.log(limit);
  //     return 'You have sent a get request to users endpoint';
  //   }

  //used pipe

  /**
   * GET /users/:id? - Fetches users with optional ID and query parameters.
   * - Supports pagination using `limit` and `page` query parameters.
   *
   * @param getUsersParamDto - Optional DTO for user ID parameter.
   * @param limit - Limit the number of results (default: 10).
   * @param page - Current page number (default: 1).
   * @returns List of users.
   */
  @ApiOperation({
    summary: 'Fetches the users',
  })
  @ApiResponse({
    status: 200,
    description: 'User fetched succesfully',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'Limit the number of results',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: 'Number of current page',
    example: 1,
  })
  @Get()
  public getUsers(
    // commented because we can't use dto with single key extracted
    // @Param('id', ParseIntPipe) id: number | undefined,
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUsersParamDto, limit, page);
    // console.log(getUsersParamDto);
    // console.log(limit);
    // console.log(page);
  }

  /**
   * POST /users - Creates a new user.
   * - Accepts user data via `CreateUserDto`.
   *
   * @param createUserDto - Data Transfer Object for creating a user.
   * @returns Confirmation message.
   */
  @Post() // this is the decorator handling POST requests
  public createUser(
    // @Body(new ValidationPipe()) createUserDto: CreateUserDto, //here we can use our dto class to
    @Body() createUserDto: CreateUserDto, //here we can use our dto class to without using validaiton PIPE because imported into the main.ts
    // @Headers() headers: any,
    // @Ip() ip: any,
  ) {
    return this.usersService.createUser(createUserDto);
    // console.log(headers);
    // console.log(ip);
    // return 'You have sent a post request to users endpoint';
  }

  // in below way we can use the express request object to get the body params but its not good way until its necessary
  // @Post() // this is the decorator handling POST requests
  // public createUser(@Req() request: Request) {
  // console.log(request);
  // return 'You have sent a post request to users endpoint';
  // }

  // started with the patch request
  /**
   * PATCH /users - Updates an existing user.
   * - Accepts partial user data via `PatchUserDto`.
   *
   * @param patchUserDto - Data Transfer Object for patching a user.
   * @returns Updated user data.
   */
  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
