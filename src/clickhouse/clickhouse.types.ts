export enum Table {
  USER_ACTIVITY = 'user_activity',
}

export interface TableEntities {
  [Table.USER_ACTIVITY]: UserActivity;
}

export class UserActivity {
  readonly userId: string;
  readonly deviceId: string;
  readonly appId: string;
  readonly timestamp: string;

  constructor(createParam: {
    userId: string;
    deviceId: string;
    appId: string;
    timestamp: Date;
  }) {
    this.userId = createParam.userId;
    this.deviceId = createParam.deviceId;
    this.appId = createParam.appId;
    this.timestamp = createParam.timestamp.toClickhouseTS();
    console.log(this.timestamp);
  }
}
