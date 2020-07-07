import { Component, OnInit } from '@angular/core';
import{Mstudent} from 'src/app/shared/models/mstudent.model'
import{MstudentService} from 'src/app/shared/services/mstudent.service'
import{isNullOrUndefined} from 'util'
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students: Mstudent[];

  constructor(private mstudentService: MstudentService,  private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData(){
    try {
      let students = this.mstudentService.getAll();
      this.students = isNullOrUndefined(await students)? [] : await students;    }catch(err){
      console.error(err);
    }
  }

  onAddProfile(){
    this.router.navigate([this.router.url, 'profile']);
  }

  onLinkProfile(id: number){
    this.router.navigate([this.router.url, 'profile', id])
  }
}
