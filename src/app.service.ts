import { Injectable } from '@nestjs/common';

// services are also called providers. which is responsible for 
// managing business logic.
// All the provider's/service's will have @Injectable decorator
// because nest can automatically inject them where necessary.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
