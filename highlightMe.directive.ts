import {Directive, ElementRef, HostListener} from 'angular2/core';

@Directive({
	selector: '[highlightMe]'
})

export class HighlightMeDirective {
	constructor(private el: ElementRef) {
		this.el.nativeElement.style.backgroundColor = 'Green';
	}

	@HostListener ('mouseenter') onMouseEnter(){
		this.highlight('yellow');
	}

	@HostListener ('mouseleave') onMouseLeave(){
		this.highlight('blue');
	}

	private highlight(color : string) {
		this.el.nativeElement.style.backgroundColor = color;
	}
}
