import { Hive } from './hive.model';

export class User {
  userID: string;
  firstVisit: Date;
  lastVisit: Date;
  hives: Hive[];
}
