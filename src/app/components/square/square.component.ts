import { Component, Input, OnInit } from '@angular/core';
import { BoardServicesService } from 'src/app/board-services.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
@Input() i:number;
  constructor(public borderSevice:BoardServicesService) { }

  ngOnInit(): void {
  }
  playerClick(){
    if (this.borderSevice.swuares[this.i]==null && !this.borderSevice.win) {
      
      this.addMove()
      if (this.borderSevice.GameMoves>3) {
       this.borderSevice.win = this.borderSevice.checkWin(this.i);       
      }
      if (this.borderSevice.GameMoves==8) {
        this.borderSevice.GameOver=true;
      }
      this.borderSevice.GameMoves++;
    } 
     
  }

  addMove(){
    if ( this.borderSevice.GameMoves%2==0) {
      this.borderSevice.swuares[this.i]="X"
    }else{
      this.borderSevice.swuares[this.i]="O"
    }
  }
}
