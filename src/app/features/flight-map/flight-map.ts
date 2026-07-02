import { AfterViewInit, Component, effect, OnInit } from '@angular/core';
import { FlightService } from '../../core/services/flight';
import * as L from 'leaflet';
import { Iflight } from '../../core/model/flight.model';
import { MATERIAL_MODULES } from '../../shared/material/material-module';
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

@Component({
  selector: 'app-flight-map',
  imports: [...MATERIAL_MODULES],
  templateUrl: './flight-map.html',
  styleUrl: './flight-map.scss',
})
export class FlightMap implements AfterViewInit {
 
  private markers: L.Marker[] = [];
  private map!: L.Map;
  private routeLine?: L.Polyline;
  

  constructor(private flightService: FlightService){
   
      effect(() => {

    this.flightService.filteredFlights();

    if (this.map) {
      this.addFlightMarkers();
    }

  });
  }





  private drawRoute(flight: Iflight): void {
  if (this.routeLine) {
    this.map.removeLayer(this.routeLine);
  }

  this.routeLine = L.polyline(
    [
      flight.originCoordinates,
      flight.destinationCoordinates
    ],
    {
      weight: 4
    }
  ).addTo(this.map);

  this.map.fitBounds(
    this.routeLine.getBounds(),
    {
      padding: [50, 50]
    }
  );

}



  ngAfterViewInit(): void {
  this.initMap();

  setTimeout(() => {
    this.map.invalidateSize();
    this.addFlightMarkers();
  }, 100);
}

  private initMap(): void {
    this.map = L.map('map').setView([20.5937, 78.9629], 5);

    L.tileLayer(
      'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        attribution: '&copy; OpenStreetMap contributors',
      }
    ).addTo(this.map);

    L.marker([28.6139, 77.2090])
      .addTo(this.map)
      .bindPopup('Delhi Airport');
  }

 private addFlightMarkers(): void {

  // remove old markers
  this.markers.forEach(marker => {
    this.map.removeLayer(marker);
  });

  this.markers = [];

  this.flightService.filteredFlights().forEach(flight => {

    const marker = L.marker([
      flight.latitude,
      flight.longitude
    ]);

    marker.addTo(this.map);

    marker.bindPopup(`
      <b>${flight.flightNumber}</b><br>
      Callsign: ${flight.callsign}<br>
      ${flight.origin} → ${flight.destination}<br>
      Status: ${flight.status}
    `);

    marker.on('click', () => {

      this.flightService.selectFlight(flight);

      this.drawRoute(flight);

    });

    this.markers.push(marker);

  });

}
}
