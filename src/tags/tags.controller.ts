import {
  Body,
  Controller,
  Delete,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTagsDto } from './dtos/create-tags.dto';
import { TagsService } from './providers/tags.service';

@Controller('tags')
@ApiTags('Tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}
  @ApiOperation({
    summary: 'Create an tag for a post',
  })
  @ApiResponse({
    status: 200,
    description: 'Your tag has been created successfully',
  })
  @Post()
  public createTag(@Body() createTagsDto: CreateTagsDto) {
    return this.tagsService.createTags(createTagsDto);
  }

  @Delete()
  public deleteTags(@Query('id', ParseIntPipe) id: number) {
    return this.tagsService.deleteTags(id);
  }

  // /tags/soft-delete
  @Delete('soft-delete')
  public softDeleteTags(@Query('id', ParseIntPipe) id: number) {
    return this.tagsService.softDelete(id);
  }
}
