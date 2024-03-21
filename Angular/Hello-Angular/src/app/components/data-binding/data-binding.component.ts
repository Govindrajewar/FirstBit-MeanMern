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


// DataBindingComponent class ends here:
}
