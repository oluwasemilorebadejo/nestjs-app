import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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
    try {
      return await this.catService.findAll();
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'You dont have permissions for this resource',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  @Get(':id')
  @HttpCode(200)
  async findOne(@Param('id') id: string): Promise<string> {
    return `this is cat number ${id}`;
  }

  @Patch()
  async find() {
    throw new BadRequestException('Something bad happened', {
      cause: new Error(),
      description: 'Error!',
    });
  }
}
