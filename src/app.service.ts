import { Injectable } from '@nestjs/common';
import { Demo } from './dto/demo.type';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Khanh!';
  }
  getListUser(id: number, hoTen: string, filter: string, token: string): Demo {
    return { id, hoTen, filter, token };
  }
}
