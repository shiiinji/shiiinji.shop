import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class ProductCreateInput implements Prisma.ProductUncheckedCreateInput {
  id?: string;
  title: string;
  content?: string;
  imageUrl?: string;
  published: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  shopId: string;
}