import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class ProductUpdateInput implements Prisma.ProductUncheckedCreateInput {
  id?: string;
  title: string;
  content?: string;
  published: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  shopId: string;
}
