import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { SEATS_COLOR_RANGE } from 'src/app/shared/constants/constants';

@Directive({
  selector: '[appColormark]',
  standalone: true,
})
export class ColormarkDirective implements OnInit, OnChanges {
  @Input('appColormark') seats: number;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.elRef.nativeElement, this.getClass(this.seats));
  }

  ngOnChanges(): void {
    this.renderer.removeClass(this.elRef.nativeElement, 'red');
    this.renderer.removeClass(this.elRef.nativeElement, 'yellow');
    this.renderer.removeClass(this.elRef.nativeElement, 'green');
    this.renderer.addClass(this.elRef.nativeElement, this.getClass(this.seats));
  }

  private getClass(seats: number): string {
    let color: string;
    if (seats < SEATS_COLOR_RANGE.low) {
      color = 'red';
    } else if (SEATS_COLOR_RANGE.low <= seats && seats < SEATS_COLOR_RANGE.high) {
      color = 'yellow';
    } else {
      color = 'green';
    }

    return color;
  }
}
