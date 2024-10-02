import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common'

  housingLocation: Housinglocation = {
    id: 1,
    name: 'Test Home',
    city: "Test City",
    photo: `${this.baseUrl}/example-house.jpg`,
    availableUnits: 100,
    wifi: true,
    laundry: true,
  }
}
