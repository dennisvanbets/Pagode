import {Priority} from './priority';

export class Todo {
  id: number;
  isFinished: boolean;
  priority: Priority;
  title: string;
  description: string;
}
