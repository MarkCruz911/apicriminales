import { Module } from '@nestjs/common';
import { CriminalService } from './criminal.service';
import { CriminalController } from './criminal.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Criminal, CriminalSchema } from './schemas/criminal.schema';

@Module({
  imports:[MongooseModule.forFeature([
    {
      name:Criminal.name,
      schema:CriminalSchema
    }
  ])],

  controllers: [CriminalController],
  providers: [CriminalService],
})
export class CriminalModule {}
