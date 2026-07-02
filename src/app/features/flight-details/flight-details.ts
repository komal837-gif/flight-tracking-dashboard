import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FlightService } from '../../core/services/flight';
import { MATERIAL_MODULES } from '../../shared/material/material-module';


@Component({
  selector: 'app-flight-details',
  imports: [CommonModule,...MATERIAL_MODULES],
  templateUrl: './flight-details.html',
  styleUrl: './flight-details.scss',
})
export class FlightDetails {
 flightService=inject(FlightService)
}
