import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Hamburguer } from '../entities/hamburguerEntity'
import { HamburguerService} from "../services/hamburguerService"

@Controller('Hamburguer')
export class HamburguerController {
  constructor(private readonly hamburguerService: HamburguerService) {}

  @Get()
  gethamburguer(): Promise<Hamburguer[]> {
    return this.hamburguerService.gethamburguer();
  }

  @Get(':id')
  getHamburguer(@Param('id') id: number): Promise<Hamburguer> {
    return this.hamburguerService.getHamburguer(id);
  }

  @Post()
  createHamburguer(@Body() hamburguer: Hamburguer): Promise<Hamburguer> {
    return this.hamburguerService.createHamburguer(hamburguer);
  }

  @Put(':id')
  updateHamburguer(@Param('id') id: number, @Body() hamburguer: Hamburguer): Promise<Hamburguer> {
    return this.hamburguerService.updateHamburguer(id, hamburguer);
  }

  @Delete(':id')
  deletehamburguer(@Param('id') id: number): Promise<void> {
    return this.hamburguerService.deletehamburguer(id);
  }
}
