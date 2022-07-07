import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
@Resolver()
export class UsersResolver {
    constructor(
        private usersService: UsersService
      ) {}
    
      @Query()
      async getAllUser() {
        return this.usersService.getAllUser();
      }

      @Mutation()
      async userUpdate(@Args() req: any) {
        return this.usersService.userUpdate(req);
      }

      @Mutation()
      async userDelete(@Args() req: any) {
        return this.usersService.userDelete(req);
      }

      @Mutation()
      async userAdd(@Args() req: any) {
        return this.usersService.userAdd(req);
      }
}
