import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnoComponent } from '../components/uno/uno.component';
import { UnoRoutingModule } from './uno-routing.module';

@NgModule({
  declarations: [UnoComponent],
  imports: [
    CommonModule,
    UnoRoutingModule
  ]
})
export class UnoModule { }
