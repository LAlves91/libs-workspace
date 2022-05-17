import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseOneComponent } from './base-one.component';

@NgModule({
  declarations: [BaseOneComponent],
  imports: [CommonModule],
  exports: [BaseOneComponent],
})
export class BaseOneModule {}
