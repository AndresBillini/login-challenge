import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  user = {
    username: '',
    password: ''
  };
  rememberMe = false;
  error: string;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.user).subscribe(info => {
      if (this.rememberMe) {
        localStorage.setItem('response', info.response);
      }
      if (info.response) {
        sessionStorage.setItem('log', 'active');
        this.router.navigate(['dashboard']);
      }
    },
    error => {
      if (error.message === 'Http failure response for https://ktap-bus-dev.azurewebsites.net/api/AuthCms: 401 Unauthorized') {
        this.error = 'Acceso no autorizado';
      }
    });
  }
}
