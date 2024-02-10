import { validate as validateSchema } from "class-validator";
import { plainToInstance, instanceToPlain } from "class-transformer";

export async function validate<T extends Object>(ClassValidation: new () => T, obj: object) {
  const instance = plainToInstance(ClassValidation, obj, {
    excludeExtraneousValues: true
  });
  const result = await validateSchema(instance);
  if (result.length > 0) throw result;
  return instanceToPlain(instance) as T;
}
