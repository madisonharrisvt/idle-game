import { Component, OnInit, ViewChild } from '@angular/core';
import { FishingComponent } from './fishing/fishing.component';
import { Tile } from './shared/models/tile-interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @ViewChild(FishingComponent) child;

  parentMessage: string = "message from parent";
  message: string;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.message = this.child.message;
  }

}