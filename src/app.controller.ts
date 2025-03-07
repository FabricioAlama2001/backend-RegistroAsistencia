import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { DatabaseSeeder } from '@database/seeders';
import { ResponseHttpModel } from '@shared/models';
import { PublicRoute } from '@auth/decorators';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private databaseSeeder: DatabaseSeeder,
  ) {}

  @PublicRoute()
  @Get('init')
  async init(): Promise<ResponseHttpModel> {
    await this.databaseSeeder.run();

    return {
      data: true,
      message: '',
      title: '',
    };
  }
}
