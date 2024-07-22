import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../../Shared/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [RouterOutlet,CardComponent,CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  isAdmin=true

  cards = [
    { name:"Ferrari",price:"$40",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_OP9TZ0iDuVeo4LKhdSaeR8k1GBkGCzu0g&s" },
    { name:"BMW",price:"$50",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc4CeMKVmDS8yr3vG0TH7wnkF5hxwYcvCTZQ&s" },
    { name:"Audi",price:"$30",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFk7atqj_e7sWZBDv0GugmH_0xJ1i4xjirFA&s" },
    { name:"Mercedes",price:"$55",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJkMdxgIkERbdVuPs1YK7Ex56aQUAlt5B2wQ&s" },
    { name:"Lamborghini",price:"$50",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8-KOhHe2Ajanw_fuQqanFExvMibxa-2tfw&s" },
    { name:"BMW",price:"$30",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTbskkCtUh3IXOHc1AHvgkY1kYQ72EnLUkhw&s" },
    { name:"Audi",price:"$35",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpi7yX2tBzD9Blyc7IBrvOqBwbIWG_AgoLVA&s" },
    { name:"Tesla",price:"$40",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3mAsKFfE--9acgO3sCupnHa-eScpdPEJ90A&s" },
    { name:"Bugati",price:"$50",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXS1goR-vJqLTDMw6QsbyzOIg1d3bHDLgNMA&s" },
  ];

}
