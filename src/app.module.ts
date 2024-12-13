import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// module allows our project to easily manage by sub components.
// every module will have the @Module decorator.
// You can think of some module for this project like AuthModule,
// DatabaseModule, UserModule, BookmarkModule etc.
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
