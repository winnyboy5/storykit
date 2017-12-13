import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appScriptPager]'
})
export class ScriptPagerDirective {

  	constructor(private el: ElementRef, private renderer: Renderer) { 
  		this.checkLines();
  	}

    @HostListener('keypress') onkeypress() {
    	this.checkLines();
    }

    private checkLines(){
    	let parent = this.el.nativeElement.getElementsByClassName('screenPlay-p');
    	console.log(parent);
    }

}
