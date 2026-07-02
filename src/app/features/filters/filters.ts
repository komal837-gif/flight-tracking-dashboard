import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FlightService } from '../../core/services/flight';
import { debounceTime } from 'rxjs/operators';
import { MATERIAL_MODULES } from '../../shared/material/material-module';



@Component({
  selector: 'app-filters',
  imports: [ReactiveFormsModule,...MATERIAL_MODULES],
  templateUrl: './filters.html',
  styleUrl: './filters.scss',
  standalone:true
})
export class Filters {
 flightService = inject(FlightService);

  filterForm = new FormGroup({
    callsign: new FormControl(''),
    status: new FormControl(''),
    origin: new FormControl(''),
    destination: new FormControl('')
  });

  ngOnInit(): void {
    
    this.filterForm.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(value => {

        this.flightService.setSearchTerm(
          value.callsign ?? ''
        );

        this.flightService.setStatus(
          value.status ?? ''
        );

        this.flightService.setOrigin(
          value.origin ?? ''
        );

        this.flightService.setDestination(
          value.destination ?? ''
        );
      });

  }
}
