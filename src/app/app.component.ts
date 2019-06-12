import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'login';
  user = {
    username: '',
    password: ''
  };
  rememberMe = false;
  constructor(private router: Router) {
    if (localStorage.getItem('response')) {
      sessionStorage.setItem('log', 'active');
      this.router.navigate(['dashboard']);
    }
  }
// juan.romero@inteli-k.com
}
