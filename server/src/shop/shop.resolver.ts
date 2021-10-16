import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { ShopWhereUniqueArgs } from './args/product-where-unique.args';
import { Shop } from './shop.entity';

@Resolver(() => Shop)
export class ShopResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => Shop, { nullable: true })
  async shop(
    @Args()
    shopWhereUniqueArgs: ShopWhereUniqueArgs,
  ): Promise<Shop | null> {
    return this.prisma.shop.findUnique({
      where: shopWhereUniqueArgs,
    });
  }

  @Query((returns) => [Shop])
  async shops(
    // @Args('params')
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.ShopWhereUniqueInput;
      where?: Prisma.ShopWhereInput;
      orderBy?: Prisma.ShopOrderByWithRelationInput;
    },
  ): Promise<Shop[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.shop.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  @Mutation(() => Shop)
  async createShop(
    // @Args('data')
    data: Prisma.ShopCreateInput,
  ): Promise<Shop> {
    return this.prisma.shop.create({
      data,
    });
  }

  @Mutation(() => Shop)
  async updateShop(
    // @Args('where')
    where: Prisma.ShopWhereUniqueInput,
    // @Args('data')
    data: Prisma.ShopUpdateInput,
  ): Promise<Shop> {
    return this.prisma.shop.update({
      data,
      where,
    });
  }

  @Mutation(() => Shop)
  async deleteUser(
    // @Args('where')
    where: Prisma.ShopWhereUniqueInput,
  ): Promise<Shop> {
    return this.prisma.shop.delete({
      where,
    });
  }
}
