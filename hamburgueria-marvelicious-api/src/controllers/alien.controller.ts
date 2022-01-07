import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Alien } from 'src/entities/alien.entity';
import { AlienService } from '../services/alien.service';

@Controller('aliens')
export class AlienController {
  constructor(private readonly alienService: AlienService) {}

  @Get()
  getAliens(): Promise<Alien[]> {
    return this.alienService.getAliens();
  }

  @Get(':id')
  getAlien(@Param('id') id: number): Promise<Alien> {
    return this.alienService.getAlien(id);
  }

  @Post()
  createAlien(@Body() alien: Alien): Promise<Alien> {
    return this.alienService.createAlien(alien);
  }

  @Put(':id')
  updateAlien(@Param('id') id: number, @Body() alien: Alien): Promise<Alien> {
    return this.alienService.updateAlien(id, alien);
  }

  @Delete(':id')
  deleteAlien(@Param('id') id: number): Promise<void> {
    return this.alienService.deleteAlien(id);
  }
}
