import { Repository } from 'typeorm';
import { Shelter } from '../entities/shelter.entity';
import { type Range } from 'src/common/types';
import { BaseSelectQueryBuilder } from 'src/common/services/base-select-query.builder';

export class ShelterSelectQueryBuilder extends BaseSelectQueryBuilder<Shelter> {
  protected override tableName = 'shelter' as const;

  public constructor(repository: Repository<Shelter>) {
    super(repository, 'shelter');
  }

  public byIds(ids?: number[]): this {
    if (!ids) return this;

    this.queryBuilder = this.queryBuilder.andWhere(`
      ${this.tableName}.id IN (${ids.join(', ')})
    `);

    return this;
  }

  public byCapacity(args?: Range<number>): this {
    const hasMin = args.gte !== null && args.gte !== undefined;
    const hasMax = args.lte !== null && args.lte !== undefined;
    if (!hasMax && !hasMin) return this;

    if (hasMin && hasMax) {
      this.queryBuilder = this.queryBuilder.andWhere(`
        ${this.tableName}.capacity >= ${args.gte} AND ${this.tableName}.capacity <= ${args.lte}
      `);
    } else if (hasMax) {
      this.queryBuilder = this.queryBuilder.andWhere(`
        ${this.tableName}.capacity <= ${args.lte}
      `);
    } else if (hasMin) {
      this.queryBuilder = this.queryBuilder.andWhere(`
        ${this.tableName}.capacity >= ${args.gte}
      `);
    }

    return this;
  }

  public byName(name?: string): this {
    if (!name) return this;

    this.queryBuilder = this.queryBuilder.andWhere(`
      ${this.tableName}.name LIKE '%${name}%'
    `);

    return this;
  }

  public byContact(contact?: string): this {
    if (!contact) return this;

    this.queryBuilder = this.queryBuilder.andWhere(`
      ${this.tableName}.contact LIKE '%${contact}%'
    `);

    return this;
  }

  public byType(type?: number): this {
    if (!type) return this;

    this.queryBuilder = this.queryBuilder.andWhere(`
      ${this.tableName}.type = ${type}
    `);

    return this;
  }
}
