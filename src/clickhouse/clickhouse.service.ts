import { Inject, Injectable } from '@nestjs/common';
import { ClickHouseClient } from '@clickhouse/client';

@Injectable()
export class ClickhouseService {
  constructor(
    @Inject(ClickHouseClient) private readonly client: ClickHouseClient,
  ) {}

  async query() {
    const result = await this.client.query({
      query: 'SELECT * FROM system.numbers LIMIT 10',
      format: 'JSONEachRow',
    });
    return await result.json();
  }
}
