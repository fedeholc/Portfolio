import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

declare var window: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  formModalLogIn: any;
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.formModalLogIn = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }
  openFormModalLogIn() {
    this.formModalLogIn.show();
  }
  logIn(email: string, pass: string) {
  
    this.authService.SignIn(email, pass, this.formModalLogIn);
 
  }
}
