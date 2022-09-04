import { ApiProperty } from "@nestjs/swagger";

export class ProductResponseDto {
    @ApiProperty({ type: String })
    title: string;

    @ApiProperty({ type: Number })
    price?: number;

    @ApiProperty({ type: String })
    description?: string;

    @ApiProperty()
    stock?: number;

    @ApiProperty({ type: [String] })
    sizes: string[];

    @ApiProperty({ type: String })
    gender: string;
}
