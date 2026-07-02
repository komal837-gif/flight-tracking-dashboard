import { computed, Injectable, signal } from '@angular/core';
import { FLIGHTS } from '../data/flights';
import { Iflight } from '../model/flight.model';


@Injectable({
  providedIn: 'root',
})
export class FlightService {
   // all flights
  flights = signal<Iflight[]>(FLIGHTS);

  // selected flight
  selectedFlight = signal<Iflight | null>(null);

  // filters
  searchTerm = signal('');
  statusFilter = signal('');
  originFilter = signal('');
  destinationFilter = signal('');

  // filtered flights
  filteredFlights = computed(() => {

    return this.flights().filter(flight => {

      const callsignMatch =
        !this.searchTerm() ||
        flight.callsign
          .toLowerCase()
          .includes(this.searchTerm().toLowerCase());

      const statusMatch =
        !this.statusFilter() ||
        flight.status === this.statusFilter();

      const originMatch =
        !this.originFilter() ||
        flight.origin === this.originFilter();

      const destinationMatch =
        !this.destinationFilter() ||
        flight.destination === this.destinationFilter();

      return (
        callsignMatch &&
        statusMatch &&
        originMatch &&
        destinationMatch
      );
    });

  });

  // KPI Cards
  totalFlights = computed(() => this.flights().length);

  activeFlights = computed(() =>
    this.flights().filter(f => f.status === 'Active').length
  );

  delayedFlights = computed(() =>
    this.flights().filter(f => f.status === 'Delayed').length
  );

  arrivedFlights = computed(() =>
    this.flights().filter(f => f.status === 'Arrived').length
  );

  // select flight
  selectFlight(flight: Iflight): void {
    this.selectedFlight.set(flight);
  }

  // update filters
  setSearchTerm(value: string): void {
    this.searchTerm.set(value);
  }

  setStatus(value: string): void {
    this.statusFilter.set(value);
  }

  setOrigin(value: string): void {
    this.originFilter.set(value);
  }

  setDestination(value: string): void {
    this.destinationFilter.set(value);
  }

  clearFilters(): void {
    this.searchTerm.set('');
    this.statusFilter.set('');
    this.originFilter.set('');
    this.destinationFilter.set('');
  }
}
