import {
  CreatePostInput,
  UpdatePostInput,
} from '@my-workspace/shared-interfaces';
import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/post-service-client';
import { PrismaService } from '../../modules/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getPost(): Promise<Post[]> {
    const posts = await this.prisma.post.findMany();
    return posts;
  }

  async getPostByID(id: number): Promise<Post> {
    const post = await this.prisma.post.findUnique({
      where: { id: Number(id) },
    });
    return post;
  }

  async createPost(input: CreatePostInput): Promise<Post> {
    const post = await this.prisma.post.create({
      data: {
        title: input.title,
        text: input.text,
      },
    });
    return post;
  }

  async updatePost(input: UpdatePostInput) {
    const post = await this.prisma.post.update({
      data: { id: input.id, title: input.title, text: input.text },
      where: { id: input.id },
    });
    return post;
  }

  async deletePost(id: number) {
    const post = await this.prisma.post.delete({ where: { id: Number(id) } });
    return post;
  }
}
