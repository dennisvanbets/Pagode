import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Role} from "../../model/role";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;

  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getUsersSlowly()
      .then(
        users => this.users = users
      );
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  gotoDetail(): void {
    this.router.navigate(['/crew', this.selectedUser.id]);
  }

  getRoleString(role: Role) {
    switch (role) {
      case Role.Bestuur: return 'Bestuur';
      case Role.Kern: return 'Kern';
    }
  }

  isBestuur(user: User) {
    return user.role === Role.Bestuur;
  }
  isKern(user: User) {
    return user.role === Role.Kern;
  }
}


