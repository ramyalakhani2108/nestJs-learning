import { IntersectionType } from '@nestjs/swagger';
import { IsDate, IsOptional } from 'class-validator';
import { paginationQueryDto } from 'src/common/pagination/dto/pagination-query.dto';

class GetPostsBaseDto {
  @IsDate()
  @IsOptional()
  startDate?: Date;

  @IsDate()
  @IsOptional()
  endDate?: Date;
}

export class getPostsDto extends IntersectionType(
  GetPostsBaseDto,
  paginationQueryDto,
) {
  //this will conbine both dtos
}
