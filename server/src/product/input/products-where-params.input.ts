import { InputType } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductsWhereParamsInput {
  skip?: number;
  take?: number;
  cursor?: ProductWhereUniqueInput;
  where?: ProductWhereUniqueInput;
}
