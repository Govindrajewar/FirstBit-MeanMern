import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  playerName:string = 'Dhoni';
  jerseyNo:number = 7;
  totalRuns:number = 15000;
  totalMatches:number = 320;

  average(){
    return this.totalRuns / this.totalMatches;
  }

  display(){
    console.log(`${this.playerName} has played ${this.totalMatches} matches and scored ${this.totalRuns} runs with average of ${this.average().toFixed(2)}`);
  }

  updateMatches(event:any){
    console.log(event.target.value);
    // to read value from input
    this.totalMatches = event.target.value;
  }

  updateName(event:any){
    this.playerName = event.target.value;
  }

  updateRuns(event:any){
    this.totalRuns = event.target.value;
  }


  // Student Details:
  studentName:string = "Abhi";
  studentRollNo:number = 7;
  marks:number = 0;

  studentDetails(){
    console.log(`Student Name: ${this.studentName}  Student Roll No: ${this.studentRollNo} and scored total ${this.marks}`)
  }

  submitMarks(event:any):void{
    this.marks = Number(event.target.value);
  }


  // Property Binding:
  cricScoreURL:string = "https://www.cricbuzz.com"
  siteName:string = "CricBuzz";
  isChanged:boolean = false;

  changeURL(){
    if(!this.isChanged){
      this.cricScoreURL = "https://www.espncricinfo.com";
      this.siteName = "ESPN";
    } else{
      this.cricScoreURL = "https://www.cricbuzz.com"
      this.siteName = "CricBuzz";
    }
    this.isChanged = !this.isChanged;

  }


  vehicleImg:string = '../../../assets/car.jpeg'
  vehiclename:string = 'Mahindra Scorpio'
  isCar:boolean = true;

  changeVehicle(){
    if(this.isCar){
      this.vehicleImg = '../../../assets/bike.webp';
      this.vehiclename = "TVS Raider 125"
    } else{
      this.vehicleImg = '../../../assets/car.jpeg'
      this.vehiclename = 'Mahindra Scorpio'
    }
    this.isCar = !this.isCar;
  }


// DataBindingComponent class ends here:
}
