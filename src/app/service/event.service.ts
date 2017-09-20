import {Injectable} from '@angular/core';
import {Event} from '../model/event';
import {MOCK_EVENTS} from './mock-events';

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
}
