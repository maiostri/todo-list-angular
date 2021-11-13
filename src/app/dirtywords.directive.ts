import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[dirtywords]'
})
export class DirtywordsDirective implements OnInit {

  @Input() dirty: boolean = false;

  constructor(private element: ElementRef, private renderer: Renderer2) {


  }

  ngOnInit(): void {
    if (this.dirty) {
      this.renderer.setStyle(this.element.nativeElement, 'text-decoration', 'line-through');
    }
  }

}
