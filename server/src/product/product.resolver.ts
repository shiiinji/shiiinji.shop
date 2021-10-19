import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { PrismaService } from '../prisma.service';
import { ProductCreateInput } from './input/product-create.input';
import { ProductUpdateInput } from './input/product-update.input';
import { ProductsWhereParamsInput } from './input/products-where-params.input';
import { ProductWhereUniqueInput } from './input/product-where-unique.input';
import { Product } from './product.entity';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => Product, { nullable: true })
  async product(
    @Args('args')
    productWhereUniqueInput: ProductWhereUniqueInput,
  ): Promise<Product | null> {
    return this.prisma.product.findUnique({
      where: productWhereUniqueInput,
    });
  }

  @Query(() => [Product])
  async products(
    @Args('args')
    productsWhereParamsInput: ProductsWhereParamsInput,
  ): Promise<Product[]> {
    const { skip, take, cursor, where } = productsWhereParamsInput;
    return this.prisma.product.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('data')
    data: ProductCreateInput,
  ): Promise<Product> {
    return this.prisma.product.create({
      data,
    });
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('where')
    where: ProductWhereUniqueInput,
    @Args('data')
    data: ProductUpdateInput,
  ): Promise<Product> {
    return this.prisma.product.update({
      data,
      where,
    });
  }

  @Mutation(() => Product)
  async deleteProduct(
    @Args('where')
    where: ProductWhereUniqueInput,
  ): Promise<Product> {
    return this.prisma.product.delete({
      where,
    });
  }
}
