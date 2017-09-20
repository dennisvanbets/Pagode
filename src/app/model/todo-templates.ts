import {Todo} from './todo';
import {Priority} from './priority';

export const TODO_TEMPLATES: Todo[] = [
  {
    id: 1,
    isFinished: false,
    priority: Priority.OpVoorhand,
    title: 'Wisselgeld checken en bijhalen',
    description: 'Naar nachtwinkels of banken gaan voor wisselgeld.'
  },
  {
    id: 2,
    isFinished: false,
    priority: Priority.VoorDeOpening,
    title: 'Kassa Tellen',
    description: 'Bedrag voor de opening invullen in ...'
  },
  {
    id: 3,
    isFinished: false,
    priority: Priority.VoorDeOpening,
    title: 'Stock Tellen en bijvullen',
    description: 'Stock van alle drank in de ijskasten en in de stockruimte.'
  },
  {
    id: 4,
    isFinished: false,
    priority: Priority.TijdensDeOpening,
    title: 'Toog prepareren',
    description: 'Toog proper maken, afwasbak vullen, deur openen, muziek aanzetten'
  },
  {
    id: 5,
    isFinished: false,
    priority: Priority.NaDeOpeningMaarAvondZelf,
    title: 'Kassa bij bestuur brengen',
    description: 'Kassa na opening op het platform plaatsen.'
  },
  {
    id: 6,
    isFinished: false,
    priority: Priority.AchterAf,
    title: 'Kuisen',
    description: 'Pagode proper maken.'
  },
];
