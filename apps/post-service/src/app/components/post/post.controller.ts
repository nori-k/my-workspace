import {
  CreatePostInput,
  UpdatePostInput,
} from '@my-workspace/shared-interfaces';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PostService } from './post.service';

@Controller('/post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAllPost() {
    return await this.postService.getPost();
  }

  @Get(':id')
  async getPostByID(@Param('id') id: number) {
    return await this.postService.getPostByID(id);
  }

  @Post()
  async createPost(@Body() input: CreatePostInput) {
    return await this.postService.createPost(input);
  }

  @Put()
  async updatePost(@Body() input: UpdatePostInput) {
    return await this.postService.updatePost(input);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: number) {
    return await this.postService.deletePost(id);
  }
}
