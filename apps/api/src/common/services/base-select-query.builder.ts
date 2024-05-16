import { Repository, SelectQueryBuilder } from 'typeorm';

export abstract class BaseSelectQueryBuilder<T extends object> {
  protected queryBuilder: SelectQueryBuilder<T>;
  protected tableName: string;

  protected constructor(repository: Repository<T>, tableName: string) {
    this.tableName = tableName;
    this.queryBuilder = repository.createQueryBuilder(this.tableName);
    // Pequeno hack para que a gente possa usar o .andWhere nos próximos filtros.
    this.queryBuilder = this.queryBuilder.where('1 = 1');
  }

  public finish(): SelectQueryBuilder<T> {
    if (process.env.NODE_ENV === 'development') {
      console.log(this.queryBuilder.getSql());
    }

    return this.queryBuilder;
  }
}
