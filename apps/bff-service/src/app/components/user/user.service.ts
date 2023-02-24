import { CreateUserInput } from '@my-workspace/shared-interfaces';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class UserService {
  host = process.env.USER_SERVICE_HOST;
  port = process.env.USER_SERVICE_PORT;
  URL = `http://${this.host}:${this.port}/user`;

  async getUser() {
    const data = await (await axios.get(this.URL)).data;
    return data;
  }

  async createUser(input: CreateUserInput) {
    const user = new CreateUserInput();
    user.email = input.email;
    user.name = input.name;
    const res = await axios.post(this.URL, user);
    return res.data;
  }
}
