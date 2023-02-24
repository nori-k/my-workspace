import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { PostModule } from './components/post/post.module';
import { UserModule } from './components/user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: true,
      // process.env.NODE_ENV !== 'production'
      //   ? join(process.cwd(), 'apps/bff-service/src/generated/schema.gql')
      //   : join(process.cwd(), 'generated/schema.gql'),
      sortSchema: true,
    }),
    PostModule,
    UserModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
