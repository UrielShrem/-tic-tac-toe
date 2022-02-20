import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardServicesService {

  swuares:string[]= [];
  GameMoves:number;
  GameOver:boolean;
  win:boolean;
  ROW=1;
  COL:number=3;
  SLANT_UP = 2;
  SLANT_DOWN = 4;

  constructor() { 
    this.newPlay()
  }

  newPlay(){
    this.swuares=new Array(9).fill(null); 
    this.GameMoves=0
    this.GameOver=false;
    this.win=false;
  }

  checkWin(i){
    if (this.checkMove(i, i%3, this.ROW)) {
      return true;
    } else {
      let rowNumber= this.rowNumber(i)  
      if (this.checkMove(i,rowNumber, this.COL)) {
        return true
      }else{
        if (i%2==0) {
          if (this.checkSlant()){
            return true
          }
        }
      }
    }
    return false
  }

  checkMove(i, numberRowOrCol ,check ){
    switch (numberRowOrCol) {
      case 0:
            if (this.checkColAfter(i,check) && this.checkColAfter(i+check,check)) {
              return true
            }else
        break;
      case 1:
        if (this.checkColBefore(i,check) && this.checkColAfter(i,check)) {
          return true
            } 
         break;
        case 2:
          if (this.checkColBefore(i,check) && this.checkColBefore(i-check,check)) {
            return true
              } 
        break;
      default:
        break;
    }
    return false
  }

  rowNumber(i){
    if (0<=i && i<=2) {
      return 0
    } else {
      if (3<=i && i<=5) {
        return 1
      } else {
        if (6<=i && i<=9) {
          return 2
        } else {
      return-1
        }
      
      }
      
    }

  }

  checkColBefore(i , check){
    
    if (this.swuares[i]==this.swuares[i-check]) {
      return true
    }else{
      return false;
    }
    

  }


  checkColAfter(i , check){
    if (this.swuares[i]==this.swuares[i+check]) {
      return true
    }
    else{
      return false;
    }
  }
  checkSlant(){
    if (this.checkMove(0,0, this.SLANT_DOWN)) {
      return  true
    } else {
      if (this.checkMove(6,2, this.SLANT_UP)) {
        return true
      }
    }
    return false
  }
  
}


