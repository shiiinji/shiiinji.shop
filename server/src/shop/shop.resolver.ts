import { Resolver, Query, Args, InputType, Mutation } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { ShopCreateInput } from './input/shop-create.input';
import { ShopWhereUniqueInput } from './input/shop-where-unique.input';
import { ShopWhereParamsInput } from './input/shops-where-params.input';
import { Shop } from './shop.entity';

@Resolver(() => Shop)
export class ShopResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => Shop, { nullable: true })
  async shop(
    @Args('args')
    shopWhereUniqueArgs: ShopWhereUniqueInput,
  ): Promise<Shop | null> {
    return this.prisma.shop.findUnique({
      where: shopWhereUniqueArgs,
    });
  }

  @Query((returns) => [Shop])
  async shops(
    @Args('args')
    shopWhereParamsArgs: ShopWhereParamsInput,
  ): Promise<Shop[]> {
    const { skip, take, cursor, where } = shopWhereParamsArgs;
    return this.prisma.shop.findMany({
      skip,
      take,
      cursor,
      where,
    });
  }

  @Mutation(() => Shop)
  async createShop(
    @Args('data')
    data: ShopCreateInput,
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
