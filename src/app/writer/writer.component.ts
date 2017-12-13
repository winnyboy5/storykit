import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {
  
  scriptTitle:string;
  scriptAuthor:string;
  scriptAddress:string;
  scriptBasedOn:string;
  revisions:Array<Object>;
  multipleAuthors:boolean  = false;
  numerOfRowsInText:number;

  constructor() { 
  	this.scriptTitle = '';
  	this.scriptAuthor = '';
  	this.scriptAddress = '';
    this.scriptBasedOn = '';
  }

  ngOnInit() {
  	this.revisions = [
      {
    		'name': 'Aswin Krishnamoorty',
    		'r_color': 'White Draft',
        'date': '10/11/2017'
    	},
      {
        'name': 'Aswin Krishnamoorty',
        'r_color': 'Blue Revision',
        'date': '10/11/2017'
      },
      {
        'name': 'Aswin Krishnamoorty',
        'r_color': 'Pink Revision',
        'date': '10/11/2017'
      },
      {
        'name': 'Aswin Krishnamoorty',
        'r_color': 'Yellow Revision',
        'date': '10/11/2017'
      },
      {
        'name': 'Aswin Krishnamoorty',
        'r_color': 'Green Revision',
        'date': '10/11/2017'
      }
    ];
  }

}
