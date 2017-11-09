import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import * as echarts from 'echarts';

@Directive({
  selector: '[echart]'
})

export class EchartDirective implements OnChanges {

  @Input('echartOption') echartOption: any;

  constructor(
    private el: ElementRef
  ) { }

  public ngOnChanges(): void {
    if (this.echartOption) {
      this.el.nativeElement.style.width = '800px';
      this.el.nativeElement.style.height = '500px';
      echarts.init(this.el.nativeElement).setOption(this.echartOption);
    }
  }
}
