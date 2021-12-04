import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
  }

  async login() {
    await this.authSvc.loginUser();
    console.log('Login Componetnt: login: click: success: ', this.authSvc.userloggedIn);
  }

}
