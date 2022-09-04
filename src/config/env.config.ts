import { plainToClass } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsString,
  validateSync,
} from 'class-validator';

import { Environment } from 'src/utils/enums/environments';

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsString()
  ENVIRONMENT: string;
  @IsNumber()
  DATABASE_PORT: number;
  @IsString()
  DATABASE_NAME: string;
  @IsString()
  DATABASE_USERNAME: string;
  @IsString()
  DATABASE_PASSWORD: string;
  @IsBoolean()
  SYNC: boolean;
}

export function validate(config: Record<string, unknown>) {
  const validateConfig = plainToClass(EnvironmentVariables, config);
  const errors = validateSync(validateConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validateConfig;
}
