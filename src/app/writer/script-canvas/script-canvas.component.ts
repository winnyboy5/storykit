import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-script-canvas',
  templateUrl: './script-canvas.component.html',
  styleUrls: ['./script-canvas.component.css'],
  encapsulation: ViewEncapsulation.None
})



export class ScriptCanvasComponent implements OnInit {
  
  editorOptions: object;
  constructor() { }

  ngOnInit() {
  	this.editorOptions= {
	  toolbarInline: true,
      charCounterCount: true,
      toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'undo', 'redo']
	}
  }

}
