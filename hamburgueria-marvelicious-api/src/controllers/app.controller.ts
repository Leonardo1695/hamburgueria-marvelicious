import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) {}

  @Get('enzo')
  getEnzo(): string {
    return this.appService.getHello();
  }
  @Get()
  getLeandro(): string {
    return 'LeoMoura';
  }
}
