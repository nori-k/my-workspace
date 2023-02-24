import { CreatePostInput } from '@my-workspace/shared-interfaces';
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PostService {
  host = process.env.POST_SERVICE_HOST;
  port = process.env.POST_SERVICE_PORT;
  URL = `http://${this.host}:${this.port}/post`;

  async getPost() {
    const data = await (await axios.get(this.URL)).data;
    return data;
  }

  async createPost(input: CreatePostInput) {
    const post = new CreatePostInput();
    post.title = input.title;
    post.text = input.text;
    const res = await axios.post(this.URL, input);
    return res.data;
  }
}
