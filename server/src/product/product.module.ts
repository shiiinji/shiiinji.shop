import { Module } from '@nestjs/common';
import { ProductListener } from './listeners/product.listener';
import { ProductResolver } from './product.resolver';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProductResolver, ProductListener],
})
export class ProductModule {}
