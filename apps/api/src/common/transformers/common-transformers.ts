import { TransformFnParams } from 'class-transformer';

/**
 * Common transformers for DTOs
 */
export class CommonTransformers {
  private constructor() {}

  static toNumberArray(obj: TransformFnParams): number[] {
    const { value } = obj;
    if (Array.isArray(value)) {
      return value.map(Number);
    }
    return value.split(',').map(Number);
  }
}
