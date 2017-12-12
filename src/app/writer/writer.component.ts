import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var jquery: any;

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {
  
  scriptTitle:string;
  scriptAuthor:string;
  numerOfRowsInText:number;

  constructor() { 
  	this.scriptTitle = '';
  	this.scriptAuthor = '';
  }

  ngOnInit() {
  }

}
