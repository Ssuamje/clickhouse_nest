import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ClickhouseService } from './clickhouse/clickhouse.service';
import { Table, UserActivity } from './clickhouse/clickhouse.types';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly clickhouseService: ClickhouseService,
  ) {}

  @Post()
  async insert() {
    await this.clickhouseService.insert(Table.USER_ACTIVITY, [
      new UserActivity({
        userId: 'sanan2',
        deviceId: 'sanan_device',
        appId: 'sanan_device_app',
        timestamp: new Date(),
      }),
    ]);
  }

  @Get()
  async query(): Promise<UserActivity[]> {
    return this.clickhouseService.query<UserActivity>(
      'SELECT * FROM user_activity',
    );
  }

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
