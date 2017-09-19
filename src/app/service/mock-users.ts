import {User} from '../model/user';
import {Role} from '../model/role';

export const USERS: User[] = [
  { id: 1, name: 'Jornt Onzia', role: Role.Bestuur, balance: 0.00},
  { id: 2, name: 'Dennis Van Bets', role: Role.Bestuur, balance: 0.00},
  { id: 3, name: 'Nick Wouters', role: Role.Bestuur, balance: 0.00},
  { id: 4, name: 'Mathieu Brusselairs', role: Role.Bestuur, balance: 0.00},
  { id: 5, name: 'Anouk Mattheeussen', role: Role.Kern, balance: 0.00},
  { id: 6, name: 'Maxim Cambier', role: Role.Kern, balance: 0.00},
  { id: 7, name: 'Dieter Cannearts', role: Role.Kern, balance: 0.00},
  { id: 8, name: 'Gilles Bosschaerts', role: Role.Kern, balance: 0.00},
  { id: 9, name: 'Stefan Cambier', role: Role.Kern, balance: 0.00},
  { id: 10, name: 'Annelies Van Wijk', role: Role.Kern, balance: 0.00}
];
