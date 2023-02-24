import { CreateUserInput, User } from '@my-workspace/shared-interfaces';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async getUser() {
    return await this.userService.getUser();
  }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') input: CreateUserInput) {
    return await this.userService.createUser(input);
  }
}
