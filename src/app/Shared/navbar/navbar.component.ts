import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})



export class NavbarComponent {

  isAdmin:boolean=false;
  isClient:boolean=false;

  constructor(private router:Router){}

  signup(){
    this.router.navigate(["signup"]);
  }

  login(){
    this.router.navigate(["login"]);
  }
}
