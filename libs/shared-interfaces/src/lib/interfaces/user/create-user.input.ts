import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  // @ApiProperty()
  @Field(() => String)
  email: string;

  // @ApiProperty()
  @Field(() => String)
  name?: string;
}
