import { Directive, ElementRef, Input, OnChanges } from '@angular/core';
import * as echarts from 'echarts';

@Directive({
  selector: 'appEchart'
})

export class EchartDirective implements OnChanges {

  @Input('echartOption') echartOption: any;

  constructor(
    private el: ElementRef
  ) { }

  public ngOnChanges(): void {
    if (this.echartOption) {
      echarts.init(this.el.nativeElement).setOption(this.echartOption);
    }
  }
}
