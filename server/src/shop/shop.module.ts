import { Module } from '@nestjs/common';
import { ShopResolver } from './shop.resolver';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ShopResolver],
})
export class ShopModule {}
