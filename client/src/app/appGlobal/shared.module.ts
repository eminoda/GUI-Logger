import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { EchartDirective } from './directive/echart.directive';
import { NgModule } from '@angular/core';

// 全局公用模块
@NgModule({
    declarations: [
        EchartDirective
    ],
    imports: [
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpModule,
        EchartDirective
    ],
    providers: []
})
export class SharedModule { }
