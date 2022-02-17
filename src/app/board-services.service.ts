import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardServicesService {

  swuares:string[]= new Array(9).fill(null);
  GameMoves:number=0
  GameOver:boolean=false;
  win:boolean=false;
  ROW=1;
  COL:number=4;
  constructor() { 
  
  }

  checkWin(i){
    this.checkMoveCol(i);
    
  }
  checkMoveCol(i){

    console.log(i%3);
    switch (i%3) {
      case 0:
        if (this.checkColLast(i,this.ROW) && this.checkColLast(i+1,this.ROW)) {
        this.win=true;
        return true
          } 
        break;
      case 1:
        if (this.checkColFirst(i,this.ROW) && this.checkColLast(i,this.ROW)) {
          this.win=true;
          return true
            } 
         break;
        case 2:
          if (this.checkColFirst(i,this.ROW) && this.checkColFirst(i-1,this.ROW)) {
            this.win=true;
            return true
              } 
        break;
      default:
        break;
    }
    return false
  }

  checkColFirst(i , check){
    if (this.swuares[i]==this.swuares[i+check]) {
      return true
    }else{
      return false;
    }
    

  }


  checkColLast(i , check){
    if (this.swuares[i]==this.swuares[i-check]) {
      return true
    }
    else{
      return false;
    }
  }
  
}


