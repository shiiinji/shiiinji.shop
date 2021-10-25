import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ProductEvent } from '../events/product.event';

@Injectable()
export class ProductListener {
  @OnEvent('product.*')
  handleProductEvent(event: ProductEvent) {
    const result = axios.post(
      `https://api.fastly.com/service/${process.env.FASTLY_ID}/purge/TOP_KEY`,
      {},
      {
        headers: {
          'Fastly-Key': process.env.FASTLY_DELETE_PURGE_KEY,
        },
      },
    );
  }
}
