import { Controller, Get, Post,Put, Body, Patch, Param, Delete, ConflictException, NotFoundException, HttpCode } from '@nestjs/common';
import { CriminalService } from './criminal.service';
import { CreateCriminalDto } from './dto/create-criminal.dto';
import { UpdateCriminalDto } from './dto/update-criminal.dto';

@Controller('criminal')
export class CriminalController {
  constructor(private readonly criminalService: CriminalService) {}

  @Post()
  async create(@Body() createCriminalDto: CreateCriminalDto) {
    try{
      return this.criminalService.create(createCriminalDto);
    }catch(e){
      if(e.code === 11000){
        throw new ConflictException('ya existe');
      }
      throw e;
    }
    
  }


  @Get()
  async findAll() {
    const criminales = await this.criminalService.findAll();
    if(!criminales) throw new NotFoundException('Criminales not found');

    return criminales;
  }


  @Get(':id')
  async findOne(@Param('id') id: string) {
    const criminal = await this.criminalService.findOne(id);
    if(!criminal) throw new NotFoundException('Criminal not found');

    return criminal;
  }



  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCriminalDto: UpdateCriminalDto) {
    const criminal = await this.criminalService.update(id, updateCriminalDto);
    if(!criminal) throw new NotFoundException("Criminal no update");

    return criminal;
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: string) {
    const criminal = await this.criminalService.remove(id);
    if(!criminal) throw new NotFoundException("Criminal no removed");

    return 

  }
}
