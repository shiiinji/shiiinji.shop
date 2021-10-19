import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProductResolver],
})
export class ProductModule {}
