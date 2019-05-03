import { Module } from '@gapi/core';
import { MainService } from './services/main.service';
import { CustomControllerController } from './custom-controller/custom-controller.controller';

@Module({
    providers: [MainService],
    controllers: [CustomControllerController]
})
export class AppModule {}
