import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CriminalModule } from './criminal/criminal.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://markcruz9111:74678959Mm@clustercriminal.4elib6u.mongodb.net/apicriminal?retryWrites=true&w=majority'),CriminalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
