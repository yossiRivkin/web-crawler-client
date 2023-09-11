import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUrlHost]'
})
export class UrlHostDirective {
  @Input() set appUrlHost(url: string) {
    if (url) {
      const host = new URL(url).host;
      this.renderer.setProperty(this.el.nativeElement, 'textContent', host);
    }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
