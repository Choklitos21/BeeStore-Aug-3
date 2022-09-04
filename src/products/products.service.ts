import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) { }

  async create(createProductDto: CreateProductDto) {
    try {
      const product = this.productRepository.create(createProductDto);
      await this.productRepository.save(product);
      return product;
    } catch (error) {
      throw new InternalServerErrorException('unhandled error');
    }
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(id: string) {
    const producExist = await this.productRepository.findOne({ where: { id: id } });
    if(producExist)
    {
      return producExist;
    }else{
      throw new NotFoundException("Oeeeee")
    }
    }

  update(id: string, updateProductDto: UpdateProductDto) {
    const producExist = this.findOne(id);
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
