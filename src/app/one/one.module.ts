import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneRoutingModule } from './one-routing.module';
import { ComponentOneComponent } from './component-one/component-one.component';

@NgModule({
  imports: [
    CommonModule,
    OneRoutingModule
  ],
  declarations: [ComponentOneComponent]
})
export class OneModule { }
