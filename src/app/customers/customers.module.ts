import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { CustomersComponent } from './customers.component';

@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }
