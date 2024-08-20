import { Module, Provider } from '@nestjs/common';
import { ClickHouseClient, createClient } from '@clickhouse/client';
import { ClickhouseService } from './clickhouse.service';

const ClickhouseClientProvider: Provider = {
  provide: ClickHouseClient,
  useFactory: (): ClickHouseClient => {
    return createClient({
      url: process.env.CLICKHOUSE_URL || 'http://localhost:8123',
      username: process.env.CLICKHOUSE_USER || 'default',
      password: process.env.CLICKHOUSE_PASSWORD || '',
    });
  },
};

@Module({
  imports: [],
  controllers: [],
  providers: [ClickhouseClientProvider, ClickhouseService],
  exports: [ClickhouseService],
})
export class ClickhouseModule {}
