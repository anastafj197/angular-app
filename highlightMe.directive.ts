import {Directive, ElementRef} from 'angular2/core';

@Directive({
	selector: '[highlightMe]'
})

export class HighlightMeDirective {
	constructor(el: ElementRef) {
		el.nativeElement.style.backgroundColor = 'Green';
	}
}