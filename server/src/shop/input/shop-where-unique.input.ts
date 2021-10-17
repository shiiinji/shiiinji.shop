import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class ShopWhereUniqueInput implements Prisma.ShopWhereUniqueInput {
  id: string;
}
