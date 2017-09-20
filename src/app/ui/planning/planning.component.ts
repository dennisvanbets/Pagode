import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EventService} from "../../service/event.service";
import {Event} from "../../model/event";
import {EventType} from "../../model/event-type";
import {Todo} from "../../model/todo";


@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  title = 'Planning';
  events: Event[];

  constructor(private router: Router,
              private eventService: EventService) {
  }

  ngOnInit(): void {
    this.getEvents();
  }

  private getEvents() {
    this.eventService.getEventsSlowly()
      .then(events => this.events = events)
  }

  todoChecked(eventId: number, todo: Todo): void {
    console.log("todochekced: " + eventId);
    this.eventService.getTodosOfEvent(eventId)
      .then(todos => todos.find(t => t.id === todo.id))
      .then(t => {
        t.isFinished != !t.isFinished;
        console.log("todo updated: " + t.id + " " + t.isFinished);
      })
  }

  isBestuursEvent(event: Event): boolean {
    return event.type === EventType.Bestuur;
  }

  isKernEvent(event: Event): boolean {
    return event.type === EventType.Kern;
  }

  isOpenbaarEvent(event: Event): boolean {
    return event.type === EventType.Openbaar;
  }
}
