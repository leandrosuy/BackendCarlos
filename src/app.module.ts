import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://leandrosuy:12345672@backendcarlos.ardio.mongodb.net/usuarios'), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
