import { Component, OnInit } from '@angular/core';
import { BoardServicesService } from 'src/app/board-services.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(public borderSevice:BoardServicesService ) { }

  ngOnInit(): void {
  }

}
