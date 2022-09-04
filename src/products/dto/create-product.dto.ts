import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({type: String})
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty({type: Number})
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiProperty({type: String})
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({type: Number})
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @ApiProperty({type: [String]})
  @IsString({ each: true })
  @IsArray()
  sizes: string[];

  @ApiProperty({type: String})
  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;
}
