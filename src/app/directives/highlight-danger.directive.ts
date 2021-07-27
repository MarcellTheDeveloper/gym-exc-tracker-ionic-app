import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightDanger]'
})
export class HighlightDangerDirective
{

  constructor(private elRef: ElementRef, private renderer: Renderer2)
  {

  }

  @HostListener('mousedown') onMouseDown(eventData: Event)
  {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'var(--ion-color-secondary)');
    this.renderer.setStyle(this.elRef.nativeElement, 'transform', 'scale(2)');
  }
  @HostListener('mouseout') onMouseleave(eventData: Event)
  {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'var(--ion-color-primary)');
    this.renderer.setStyle(this.elRef.nativeElement, 'transform', 'scale(1)');
  }
}
