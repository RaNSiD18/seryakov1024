import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path:'',
    component: MainComponent,
  },
  {
    path:'students',
    loadChildren: () => 
    import('./students/students.module').then(m => m.StudentsModule),
  },
  {
    path:'spisokstudents',
    loadChildren: () => 
    import('./spisokstudents/spisokstudents.module').then(m => m.SpisokstudentsModule),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
