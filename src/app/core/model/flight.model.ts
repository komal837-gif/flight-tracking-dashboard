export interface Iflight {
  id: number;
  flightNumber: string;
  callsign: string;
  aircraftType: string;

  origin: string;
  destination: string;

  status: 'Active' | 'Delayed' | 'Arrived';

  estimatedDepartureTime: string;
  estimatedArrivalTime: string;

  latitude: number;
  longitude: number;

  originCoordinates: [number, number];
  destinationCoordinates: [number, number];
}