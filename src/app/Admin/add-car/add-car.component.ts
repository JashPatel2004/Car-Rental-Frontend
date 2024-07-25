import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {

  imageUrl: string | ArrayBuffer | null | undefined = null;
  fileName:string='No file chosen'
  AddCar:FormGroup
  isValid:boolean=false

  constructor(private formBuilder:FormBuilder){
    this.AddCar=formBuilder.group({
      image:['',[Validators.required]],
      manufacturer:['',[Validators.required]],
      model:['',[Validators.required]],
      year:['',[Validators.required]],
      bodytype:['',[Validators.required]],
      mileage:['',[Validators.required]],
      licenseplate:['',[Validators.required]],
      transmission:['',[Validators.required]],
      price:['',[Validators.required]],
      seating:['',[Validators.required]],
      description:['',[Validators.required]],
    })
  }

  onFileSelected(event:Event){
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        this.imageUrl = e.target?.result;
      };

      reader.readAsDataURL(file);
    }
  }

  }

