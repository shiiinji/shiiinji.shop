import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopService } from './shop/shop.service';
import { ProductService } from './product/product.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ShopService, ProductService],
})
export class AppModule {}
