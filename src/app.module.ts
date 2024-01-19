import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideoModule } from './video/video.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [VideoModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//mô hình nest

//controller <==> routes của express
//module <==> ghép controller, service lại với nhau để 2 module này hiểu nhau
//service <==> controller của express
