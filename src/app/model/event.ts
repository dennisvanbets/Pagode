import {Todo} from './todo';
import {EventType} from './event-type';

export class Event {
  id: number;
  type: EventType;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  todos: Todo[];
}
