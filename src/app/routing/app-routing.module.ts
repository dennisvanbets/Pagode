import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../ui/dashboard/dashboard.component';
import {UserDetailComponent} from '../ui/user/user-detail.component';
import {UsersComponent} from '../ui/user/users.component';
import {NgModule} from '@angular/core';
import {PlanningComponent} from '../ui/planning/planning.component';

const routes: Routes = [
  { path: '', redirectTo : '/home', pathMatch: 'full'},
  { path: 'home', component: DashboardComponent},
  { path: 'crew/:id', component: UserDetailComponent},
  { path: 'crew', component: UsersComponent },
  { path: 'planning', component: PlanningComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
