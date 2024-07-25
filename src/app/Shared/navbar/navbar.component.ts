import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, RouterOutlet} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterModule,MatIconModule],
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
