import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PlanningComponent} from './ui/planning/planning.component';
import {UsersComponent} from './ui/user/users.component';
import {UserDetailComponent} from './ui/user/user-detail.component';
import {DashboardComponent} from './ui/dashboard/dashboard.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './routing/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './custom-material.module';
import {UserService} from './service/user.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    UserDetailComponent,
    PlanningComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
  title = 'Pagode Intern';
}
