import { InputType } from '@nestjs/graphql';

@InputType()
class ProductsWhereInput {
  id?: string;
  title?: string;
  content?: string;
  category?: string;
  price?: number;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  shopId?: string;
}

@InputType()
export class ProductsWhereParamsInput {
  skip?: number;
  take?: number;
  cursor?: ProductsWhereInput;
  where?: ProductsWhereInput;
}
