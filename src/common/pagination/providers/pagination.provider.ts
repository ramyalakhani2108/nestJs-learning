import { Inject, Injectable } from '@nestjs/common';
import { paginationQueryDto } from '../dto/pagination-query.dto';
import { ObjectLiteral, Repository } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { Paginated } from '../interfaces/paginated.interface';

@Injectable()
export class PaginationProvider {
  constructor(
    /**
     * Injecting request
     */
    @Inject(REQUEST)
    private request: Request,
  ) {}
  public async paginationQuery<T extends ObjectLiteral>(
    paginationQuery: paginationQueryDto,
    repository: Repository<T>,
  ): Promise<Paginated<T>> {
    const results = await repository.find({
      relations: {
        // metaOptions: true,
        // author: true,
        // tags: true,
      }, //if we just want to get it for post then define relations or if want to make it globally do eager:true under cascade:true in dto
      skip: (paginationQuery.page - 1) * paginationQuery.limit, //skip number of values
      take: paginationQuery.limit,
    });

    /**
     * Create url for pagination
     */
    const baseUrl =
      this.request.protocol + '://' + this.request.headers.host + '/';

    const newUrl = new URL(this.request.url, baseUrl);

    /**
     * cacluating the page numbers
     */

    const totalItems = await repository.count(); //totla number of items
    const totalPages = Math.ceil(totalItems / paginationQuery.limit);
    const nextPage =
      paginationQuery == totalPages
        ? paginationQuery.page
        : paginationQuery.page + 1;
    const prevPage =
      paginationQuery.page == 1
        ? paginationQuery.page
        : paginationQuery.page - 1;

    const finalRes: Paginated<T> = {
      data: results,
      meta: {
        itemsPerPage: paginationQuery.limit,
        totalItems: totalPages,
        currentPage: paginationQuery.page,
        totalPages: totalPages,
      },
      links: {
        first: `${newUrl.origin}${newUrl.pathname}?limit=${paginationQuery.limit}page=1`,
        last: `${newUrl.origin}${newUrl.pathname}?limit=${paginationQuery.limit}page=${totalPages}`,
        next: `${newUrl.origin}${newUrl.pathname}?limit=${paginationQuery.limit}page=${nextPage}`,
        prev: `${newUrl.origin}${newUrl.pathname}?limit=${paginationQuery.limit}page=${prevPage}`,
      },
    };
    return finalRes;
  }
}
