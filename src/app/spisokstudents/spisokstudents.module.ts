import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpisokstudentsRoutingModule } from './spisokstudents-routing.module';
import { SpisokstudentsComponent } from './spisokstudents.component';
import { SpisokstudentsListComponent } from './spisokstudents-list/spisokstudents-list.component';


@NgModule({
  declarations: [SpisokstudentsComponent, SpisokstudentsListComponent],
  imports: [
    CommonModule,
    SpisokstudentsRoutingModule
  ]
})
export class SpisokstudentsModule { }
