import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpisokstudentsComponent } from './spisokstudents.component';
import { SpisokstudentsListComponent } from './spisokstudents-list/spisokstudents-list.component';

const routes: Routes = [
  {
  path: '',
  component: SpisokstudentsComponent,
  children: [
    {
      path: '',
      component: SpisokstudentsListComponent,
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpisokstudentsRoutingModule { }
