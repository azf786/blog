import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { UserEntity } from './models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
