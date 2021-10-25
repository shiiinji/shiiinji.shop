import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ProductEvent } from '../events/product.event';

@Injectable()
export class ProductListener {
  @OnEvent('product.*')
  handleProductEvent(event: ProductEvent) {}
}
