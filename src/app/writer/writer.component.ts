import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {
  
  scriptTitle:string;
  numerOfRowsInText:any;
  constructor() { 
  	this.scriptTitle = '';
  }

  ngOnInit() {
  }

  countLines(event) {
  	  //console.log(this.scriptTitle);
	  //console.log(event);
  }

}
