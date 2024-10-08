import 'src/clickhouse/date.extension';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClickhouseModule } from './clickhouse/clickhouse.module';

@Module({
  imports: [ClickhouseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
