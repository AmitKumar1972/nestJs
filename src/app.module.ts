import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      typePaths:['./**/*.graphql'],
      definitions:{path: join (process.cwd(),'src/graphql.ts')}
  }),

  UsersModule,

  TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'1972',
      database:'nestgraph',
      entities:[User],
      synchronize:true
  })],

  controllers: [AppController],
  
  providers: [AppService],
})
export class AppModule {}
