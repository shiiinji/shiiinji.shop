import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { GraphQLModule } from '@nestjs/graphql';
import { PrismaModule } from './prisma.module';
import { ProductModule } from './product/product.module';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [
    EventEmitterModule.forRoot({
      wildcard: true,
    }),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
      debug: true,
      playground: true,
    }),
    PrismaModule,
    ProductModule,
    ShopModule,
  ],
})
export class AppModule {}
