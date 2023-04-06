import { Component } from '@angular/core';

@Component({
  selector: 'app-larget-vehicles',
  templateUrl: './larget-vehicles.component.html',
  styleUrls: ['./larget-vehicles.component.css']
})

//var_1---------------------------------------
// export class LargetVehiclesComponent {
//   car: string = 'Rolls-Royce Cullinan';
//   airplane: string = 'Antonov An-225 Mriya';
//   ship: string = 'Prelude FLNG';
//   showCar: boolean = false;
//   showAirplane: boolean = false;
//   showShip: boolean = false;

//   displayCar(){
//     this.showCar = true;
//     this.showAirplane = false;
//     this.showShip = false;
//   }

//   displayAirplane(){
//     this.showCar = false;
//     this.showAirplane = true;
//     this.showShip = false;
//   }

//   displayShip(){
//     this.showCar = false;
//     this.showAirplane = false;
//     this.showShip = true;
//   }
// }
//------------------------------------------

export class LargetVehiclesComponent{
  selectedVehicle: string = '';

  showInfo(vehicle: string){
    this.selectedVehicle = vehicle;
  }
}
