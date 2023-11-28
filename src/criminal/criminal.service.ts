import { Injectable } from '@nestjs/common';
import { CreateCriminalDto } from './dto/create-criminal.dto';
import { UpdateCriminalDto } from './dto/update-criminal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Criminal } from 'src/criminal/schemas/criminal.schema';
import { Model } from 'mongoose';

@Injectable()
export class CriminalService {
  constructor(@InjectModel(Criminal.name) private CriminalModel:Model<Criminal>){}


  async create(createCriminalDto: CreateCriminalDto) {
    const createdCriminal=this.CriminalModel.create(createCriminalDto)
    return createdCriminal;
  }

  findAll() {
    return this.CriminalModel.find();
  }

  findOne(id: string) {
    return this.CriminalModel.findById(id);
  }

  update(id: string, updateCriminalDto: UpdateCriminalDto) {
    return this.CriminalModel.findByIdAndUpdate(id,updateCriminalDto,{new:true});
  }

  remove(id: string) {
    return this.CriminalModel.findByIdAndDelete(id);
  }
}
