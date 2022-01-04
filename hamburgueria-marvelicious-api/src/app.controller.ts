import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("enzo")
  getEnzo(): string {
    return this.appService.getHello();
  }
  @Get()
  getLeandro(): string {
    return "LeoMoura";
  }
}
