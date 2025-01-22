import { Injectable } from '@nestjs/common';
import { CreatePostMetaOptionsDto } from '../dtos/create-post-metaoptions.dto';
import { Repository } from 'typeorm';
import { MetaOption } from '../meta-option.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetaOptionsService {
  constructor(
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,
  ) {}
  public createPostMetaOptions(
    createPostMetaOptionsDto: CreatePostMetaOptionsDto,
  ) {
    const metaOption = this.metaOptionsRepository.create(
      createPostMetaOptionsDto,
    );
    return this.metaOptionsRepository.save(metaOption); // Saving the created meta option to the database.
    // Implementation for creating post meta options
  }
}
