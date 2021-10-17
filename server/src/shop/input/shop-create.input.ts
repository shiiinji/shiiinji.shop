import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';

@InputType()
export class ShopCreateInput implements Prisma.ShopCreateInput {
  id: string;
  email: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}
