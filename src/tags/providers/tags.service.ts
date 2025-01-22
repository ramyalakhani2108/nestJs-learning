import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from '../tag.entity';
import { In, Repository } from 'typeorm';
import { CreateTagsDto } from '../dtos/create-tags.dto';
import { Body } from '@nestjs/common';

export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  public async createTags(@Body() createTagsDto: CreateTagsDto) {
    const tag = this.tagRepository.create(createTagsDto);

    return await this.tagRepository.save(tag);
  }

  public async findMultipleTags(tags: number[]) {
    return await this.tagRepository.find({
      where: {
        id: In(tags),
      },
    });
  }

  public async deleteTags(id: number) {
    await this.tagRepository.delete(id);

    return {
      deleted: true,
      id,
    };
  }

  public async softDelete(id: number) {
    await this.tagRepository.softDelete(id);
    return {
      soft_deleted: true,
      id,
    };
  }
}
