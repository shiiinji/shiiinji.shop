import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ShopWhereUniqueInput } from './shop-where-unique.input';

@InputType()
export class ShopWhereParamsInput {
  skip?: number;
  take?: number;
  cursor?: ShopWhereUniqueInput;
  where?: ShopWhereUniqueInput;
}
