export type Range<T extends number | Date> = {
  gte: T;
  lte: T;
};

export const TimeRegexp = /^(2[0-3]|[0-1]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;
