import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

const ESCAPE_KEYCODE = 8;

@Directive({
  selector: '[appAutoHeight]'
})


export class AutoHeightDirective {

	@Input() defHeight: string;

  constructor(private el: ElementRef, private renderer: Renderer) { }

    @HostListener('keypress') onkeypress() {
    	this.setHeight();
    }


	@HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
	    if (event.keyCode === ESCAPE_KEYCODE) {
	        this.resetHeight();
	    }
	}

    private setHeight() {
    	let lineHeight = parseInt(this.defHeight);
	    this.el.nativeElement.style.height = lineHeight+"px"; 
	    let scrollHeight = this.el.nativeElement.scrollHeight;
	    let numLines = Math.floor( scrollHeight / lineHeight );
	    this.el.nativeElement.style.height = scrollHeight+"px";
	}

	private resetHeight() {
		let lineHeight = parseInt(this.defHeight);
		let lines = this.el.nativeElement.value.split('\n');
		let resetHeight = lineHeight * lines.length;
		if(resetHeight !== (0 || null)){
			this.el.nativeElement.style.height = resetHeight +"px";
			this.setHeight();
			console.log(lines.length +':'+ resetHeight);
		}
        
	}
}
