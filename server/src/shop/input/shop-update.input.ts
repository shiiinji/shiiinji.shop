import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class ShopUpdateInput implements Prisma.ShopUpdateInput {
  id: string;
  email: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}
