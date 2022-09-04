import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import * as Joi from "joi";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProductsModule} from "./products/products.module";
import {UsersModule} from "./users/users.module";
import {AuthModule} from "./auth/auth.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        '.env',
        '.env.development',
        '.env.staging',
        '.env.test',
        '.env.production',
      ],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
            .valid('development', 'production', 'test', 'staging')
            .default('development'),
        ENVIRONMENT: Joi.string(),
        PORT: Joi.number().default(3000),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        name: 'default',
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        database: configService.get('DATABASE_NAME'),
        username: configService.get('DATABASE_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        autoLoadEntities: true,
        synchronize: configService.get<boolean>('SYNC'),
        logging: configService.get('ENVIRONMENT') !== 'production',
      }),
    }),
      ProductsModule,
      UsersModule,
      AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
