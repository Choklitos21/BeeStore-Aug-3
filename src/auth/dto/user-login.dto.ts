import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
} from 'class-validator';

export class UserLoginDto {
  @ApiProperty({type: String})
  @IsString()
  userName: string;

  @ApiProperty({type: String})
  @IsString()
  password: string;

}
