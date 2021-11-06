import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class ProductUpdateInput implements Prisma.ProductWhereUniqueInput {
  id?: string;
  title?: string;
  content?: string;
  category?: string;
  price?: number;
  imageUrl?: string;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  shopId?: string;
}
