Flight Tracking & Operations Dashboard
Overview
Flight Tracking & Operations Dashboard is a responsive web application built using Angular 20 and Leaflet Maps. The application allows aviation operations teams to monitor flights, visualize routes, view flight details, and track operational KPIs in a single dashboard.

Features
Interactive Flight Map using Leaflet

15 Mock Flight Markers

Flight Route Visualization

Flight Details Panel

KPI Dashboard

Total Flights
Active Flights
Delayed Flights
Arrived Flights
Search by Callsign

Filter by Status

Filter by Origin Airport

Filter by Destination Airport

Responsive Dashboard Layout

Angular Signals for State Management

Tech Stack
Angular 20
TypeScript
Angular Material
Leaflet
RxJS
Reactive Forms
SCSS
Project Structure
src/ ├── app/ │ ├── core/ │ │ ├── data/ │ │ ├── models/ │ │ └── services/ │ ├── features/ │ │ ├── dashboard/ │ │ ├── filters/ │ │ ├── flight-details/ │ │ └── flight-map/ │ └── shared/ │ └── material/

Installation
Clone the repository:

git clone

Install dependencies:

npm install

Run the application:

ng serve

Navigate to:

http://localhost:4200

Build
To generate a production build:

ng build

Build files will be available inside the dist folder.

Architecture
The application follows a component-based architecture.

Dashboard Component – Main dashboard layout
Flight Map Component – Leaflet map integration and route visualization
Filters Component – Search and filtering functionality
Flight Details Component – Displays selected flight information
Flight Service – Centralized state management using Angular Signals
Future Enhancements
Dark Mode
Airport Markers
Flight Playback Animation
Weather Overlay Integration
Backend API Integration
Author
Developed as part of the Frontend Developer (Angular & UI/UX) Technical Assessment.
