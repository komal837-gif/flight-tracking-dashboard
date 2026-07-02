import { Component, inject } from '@angular/core';
import { FlightDetails } from '../flight-details/flight-details';
import { FlightMap } from '../flight-map/flight-map';
import { Filters } from '../filters/filters';
import { FlightService } from '../../core/services/flight';
import { MatCard, MatCardContent } from "@angular/material/card";

@Component({
  selector: 'app-dashboard',
  imports: [FlightMap, FlightDetails, Filters, MatCard, MatCardContent,],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  standalone:true
})
export class Dashboard {
  flightService=inject(FlightService)
}
