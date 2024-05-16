export type Range<T extends number | Date> = {
  gte: T;
  lte: T;
};
