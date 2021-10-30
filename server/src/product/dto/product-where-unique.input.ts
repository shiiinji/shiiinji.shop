import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class ProductWhereUniqueInput implements Prisma.ProductWhereUniqueInput {
  id: string;
}
