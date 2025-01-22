import { Body, Controller, Post } from '@nestjs/common';
import { MetaOptionsService } from './providers/meta-option.service';
import { CreatePostMetaOptionsDto } from './dtos/create-post-metaoptions.dto';

@Controller('meta-options')
export class MetaOptionsController {
  constructor(private readonly metaOptionsService: MetaOptionsService) {}

  @Post()
  public async createPostMetaOptions(
    @Body() createPostMetaOptionsDto: CreatePostMetaOptionsDto,
  ) {
    return this.metaOptionsService.createPostMetaOptions(
      createPostMetaOptionsDto,
    );
  }
}
