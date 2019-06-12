import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.less']
})
export class DashboardsComponent implements OnInit {

  constructor(private router: Router) {
    if (sessionStorage.getItem('log') !== 'active') {
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
  }

  logOut() {
    localStorage.removeItem('response');
    sessionStorage.removeItem('log');
    this.router.navigate(['']);
  }
}
