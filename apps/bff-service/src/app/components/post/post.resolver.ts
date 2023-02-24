import { CreatePostInput, Post } from '@my-workspace/shared-interfaces';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostService } from './post.service';

@Resolver()
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [Post])
  async getPost() {
    return await this.postService.getPost();
  }

  @Mutation(() => Post)
  async createPost(@Args('createPostInput') input: CreatePostInput) {
    return await this.postService.createPost(input);
  }
}
