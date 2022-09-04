import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {


  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) { }

  async create(createUserDto: CreateUserDto) {
    try {
      const user = this.userRepository.create(createUserDto);
      await this.userRepository.save(user);
      return user;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('unhandled error');
    }
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findByUserName(userName: string) {
    return await this.userRepository.findOne({ where: { userName: userName } });
  }

  async findOne(id: string) {
    return await this.userRepository.find({ where: { id: id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
