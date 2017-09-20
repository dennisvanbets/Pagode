import {EventType} from '../model/event-type';
import {Event} from '../model/event';
import {TODO_TEMPLATES} from '../model/todo-templates';

export const MOCK_EVENTS: Event[] = [
  {
    id: 1,
    type: EventType.Openbaar,
    name: 'Oktoberfest',
    description: 'Bier en lederhausen',
    startDate: new Date('1509138000'),
    endDate: new Date('1509159600'),
    todos: TODO_TEMPLATES
  },
  {
    id: 2,
    type: EventType.Kern,
    name: 'Pagodianen Raad Oktober',
    description: 'Bier en lederhausen',
    startDate: new Date('1507064400'),
    endDate: new Date('1507068000'),
    todos: TODO_TEMPLATES
  },
];
