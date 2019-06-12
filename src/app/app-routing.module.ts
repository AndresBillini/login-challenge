import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardsComponent } from './components/dashboards/dashboards.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'dashboard', component: DashboardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
