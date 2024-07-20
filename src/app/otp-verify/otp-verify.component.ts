import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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

 constructor(private formBuilder:FormBuilder){
  this.otpForm=formBuilder.group({
    otp:['',Validators.required,Validators.minLength(6),Validators.maxLength(6)]
  })
 }

 submitOTP(){
  if(this.otpForm.valid){

  }
  else{
    this.isValid=true
  }
 }
}
