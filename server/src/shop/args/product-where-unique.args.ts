import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@ArgsType()
export class ShopWhereUniqueArgs implements Prisma.ShopWhereUniqueInput {
  id: string;
}
