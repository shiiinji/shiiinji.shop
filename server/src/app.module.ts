import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from './prisma.module';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      debug: true,
      playground: true,
    }),
    PrismaModule,
    ShopModule,
  ],
})
export class AppModule {}
