import { InputType } from '@nestjs/graphql';

@InputType()
export class ShopWhereInput {
  id?: string;
  email?: string;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@InputType()
export class ShopWhereParamsInput {
  skip?: number;
  take?: number;
  cursor?: ShopWhereInput;
  where?: ShopWhereInput;
}
