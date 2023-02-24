import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  // @ApiProperty()
  @Field(() => Int)
  id: number;

  // @ApiProperty()
  @Field(() => String)
  email?: string;

  // @ApiProperty()
  @Field(() => String)
  name?: string;
}
