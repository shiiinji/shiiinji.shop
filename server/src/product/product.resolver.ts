import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ProductEvent } from './events/product.event';
import { ProductCreateInput } from './dto/product-create.input';
import { ProductUpdateInput } from './dto/product-update.input';
import { ProductsWhereParamsInput } from './dto/products-where-params.input';
import { ProductWhereUniqueInput } from './dto/product-where-unique.input';
import { Product } from './product.entity';
import { PrismaService } from '../prisma.service';

@Resolver(() => Product)
export class ProductResolver {
  constructor(
    private prisma: PrismaService,
    private eventEmitter: EventEmitter2,
  ) {}

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
    const productEvent = new ProductEvent();
    productEvent.id = data.id;
    this.eventEmitter.emit('product.created', productEvent);

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
    const productEvent = new ProductEvent();
    productEvent.id = where.id;
    this.eventEmitter.emit('product.updated', productEvent);

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
    const productEvent = new ProductEvent();
    productEvent.id = where.id;
    this.eventEmitter.emit('product.deleted', productEvent);

    return this.prisma.product.delete({
      where,
    });
  }
}
