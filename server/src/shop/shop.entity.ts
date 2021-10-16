import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../base.entity';

@ObjectType()
export class Shop extends BaseEntity {
  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  name: string | null;
}
