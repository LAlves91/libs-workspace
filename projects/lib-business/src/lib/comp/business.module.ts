import { NgModule } from '@angular/core';
import { BaseOneModule } from 'lib-core';
import { BusinessComponent } from './business.component';

@NgModule({
  declarations: [
    BusinessComponent
  ],
  imports: [
    BaseOneModule
  ],
  exports: [
    BusinessComponent
  ]
})
export class BusinessModule { }
