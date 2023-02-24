import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './components/user/user.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [UserModule, PrismaModule],
  controllers: [AppController],
})
export class AppModule {}
