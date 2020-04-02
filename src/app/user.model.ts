import { Hive } from './hive.model';

export class User {
  // tslint:disable-next-line: variable-name
  _id: string;
  id: string;
  firstVisit: Date;
  lastVisit: Date;
  hives: Hive[];
}
