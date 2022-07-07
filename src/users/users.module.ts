import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  providers: [UsersService, UsersResolver],
  controllers: [UsersController]
})
export class UsersModule {}
