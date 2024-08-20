import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ClickhouseService } from './clickhouse/clickhouse.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly clickhouseService: ClickhouseService,
  ) {}

  @Get()
  async query() {
    return this.clickhouseService.query();
  }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
