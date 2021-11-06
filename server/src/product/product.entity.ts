import { Field, ObjectType } from '@nestjs/graphql';
import { BaseEntity } from '../base.entity';

@ObjectType()
export class Product extends BaseEntity {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  content: string;

  @Field(() => String, { nullable: true })
  category: string;

  @Field(() => Number, { nullable: true })
  price: number;

  @Field(() => String, { nullable: true })
  imageUrl: string;

  @Field(() => Boolean, { nullable: true })
  published: boolean;

  @Field(() => String, { nullable: true })
  shopId: string;
}
