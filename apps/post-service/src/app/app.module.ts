import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PostModule } from './components/post/post.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [PostModule, PrismaModule],
  controllers: [AppController],
})
export class AppModule {}
