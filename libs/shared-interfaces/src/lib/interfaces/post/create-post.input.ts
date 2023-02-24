import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  // @ApiProperty()
  @Field(() => String)
  title: string;

  // @ApiProperty()
  @Field(() => String)
  text?: string;
}
