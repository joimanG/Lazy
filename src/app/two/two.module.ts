import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoRoutingModule } from './two-routing.module';
import { ComponentTwoComponent } from './component-two/component-two.component';

@NgModule({
  imports: [
    CommonModule,
    TwoRoutingModule
  ],
  declarations: [ComponentTwoComponent]
})
export class TwoModule { }
