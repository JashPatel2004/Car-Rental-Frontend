import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isValid:boolean=false
  loginForm:FormGroup

  constructor(private formBuilder:FormBuilder,private router:Router){
    // console.log("Hii");
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
  })
  }

  

  submit(){
    // console.log("Hii");
    if(this.loginForm.valid){
        this.router.navigate(['/adminDash'])
    }
    else{
      this.isValid=true
    }
  }
}
