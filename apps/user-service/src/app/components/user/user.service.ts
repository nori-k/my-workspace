import {
  CreateUserInput,
  UpdateUserInput,
} from '@my-workspace/shared-interfaces';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/user-service-client';
import { PrismaService } from '../../modules/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUser() {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async getUserByID(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: Number(id) },
    });
    return user;
  }

  async createUser(input: CreateUserInput): Promise<User> {
    const user = await this.prisma.user.create({
      data: {
        email: input.email,
        name: input.name,
      },
    });
    return user;
  }

  async updateUser(input: UpdateUserInput) {
    const user = await this.prisma.user.update({
      data: { id: input.id, email: input.email, name: input.name },
      where: { id: input.id },
    });
    return user;
  }

  async deleteUser(id: number) {
    const user = await this.prisma.user.delete({ where: { id: Number(id) } });
    return user;
  }
}
