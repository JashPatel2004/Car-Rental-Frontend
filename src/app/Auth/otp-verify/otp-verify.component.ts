import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-verify',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './otp-verify.component.html',
  styleUrl: './otp-verify.component.css'
})
export class OtpVerifyComponent {
 isValid:boolean=false

 otpForm:FormGroup;

 constructor(private formBuilder:FormBuilder,private router:Router){
  this.otpForm=formBuilder.group({
    otp:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]]
  })
 }

 submitOTP(){
  if(this.otpForm.valid){
      this.router.navigate(['/login'])
  }
  else{
    this.isValid=true
  }
 }
}
