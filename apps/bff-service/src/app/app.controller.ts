import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  helthCheck() {
    return { message: 'Hello BFF Service' };
  }
}
