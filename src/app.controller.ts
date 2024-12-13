import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// controllers are responsible for handling incoming requests and
// returning responses to the client.
// All the controllers should have @Controller decorator.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
