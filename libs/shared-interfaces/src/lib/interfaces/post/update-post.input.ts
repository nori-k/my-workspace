import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput {
  // ApiProperty()
  @Field(() => Int)
  id: number;

  // @ApiProperty()
  @Field(() => String)
  title?: string;

  // @ApiProperty()
  @Field(() => String)
  text?: string;
}
