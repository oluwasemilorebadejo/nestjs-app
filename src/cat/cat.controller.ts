import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dtos/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatController {
  constructor(private catService: CatService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createCatDto: CreateCatDto) {
    this.catService.create(createCatDto);
  }

  @Get()
  @HttpCode(200)
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string): string {
    return `this is cat number ${id}`;
  }
}
