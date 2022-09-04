import { ApiProperty } from "@nestjs/swagger";

export class UserResponseDto {
    @ApiProperty({ type: String })
    name: string;

    @ApiProperty({ type: String })
    userName: string;

    @ApiProperty({ type: String })
    email: string;
}
