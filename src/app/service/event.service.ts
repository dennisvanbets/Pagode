import {Injectable} from '@angular/core';
import {Event} from '../model/event';
import {MOCK_EVENTS} from './mock-events';
import {Todo} from "../model/todo";

@Injectable()
export class EventService {
  getEvents(): Promise<Event[]> {
    return Promise.resolve(MOCK_EVENTS);
  }

  getEventsSlowly(): Promise<Event[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getEvents()), 500);
    });
  }

  getEvent(id: number): Promise<Event> {
    return this.getEvents()
      .then(events => events.find(event => event.id === id));
  }

  getTodosOfEvent(eventId: number): Promise<Todo[]> {
    return this.getEvents()
      .then(e => e.find(event => event.id === eventId))
      .then(e => e.todos)
  }
}
