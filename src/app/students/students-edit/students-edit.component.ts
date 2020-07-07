import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { MstudentService } from 'src/app/shared/services/mstudent.service';
import { Mstudent } from 'src/app/shared/models/mstudent.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css'],
})
export class StudentsEditComponent implements OnInit {
  id: number;
  student: Mstudent;
  studentForm: FormGroup;
  
  constructor(private activatedRoute: ActivatedRoute, private mstudentService: MstudentService, private router: Router) { 
    this.activatedRoute.params.subscribe((params) => {
      if(!isNullOrUndefined(params.id)){
        this.id = +params.id;
      }else{
        this.id = null;
      }
    }); 
  }
  
  ngOnInit(): void {
    this.studentForm = new FormGroup({
      name:  new FormControl(null, [Validators.required, Validators.pattern('[A-Z,А-Я][a-z,а-я]+')]),
      surname:  new FormControl(null, [Validators.required, Validators.pattern('[A-Z,А-Я][a-z,а-я]+')]),
      midname:  new FormControl(null, [Validators.required, Validators.pattern('[A-Z,А-Я][a-z,а-я]+')]),
      phone:  new FormControl(null, [Validators.required],),
      email:  new FormControl(null, [Validators.required, Validators.email]),
      Bday:  new FormControl(null, [Validators.required]),
      Group: new FormControl(null, [Validators.required]),
      DoP: new FormControl(null, [Validators.required])
    });
    this.getData();
  }

  async getData(){
    if(!isNullOrUndefined(this.id)){
      try{
        let student = this.mstudentService.getOneById(this.id);
        this.student = await student;
      }catch(err){
        console.error(err);
      }
    this.studentForm.patchValue({
      name: this.student.name,
      surname: this.student.surname,
      midname: this.student.midname,
      phone: this.student.phone,
      email: this.student.email,
      Bday: this.student.Bday,
      Group: this.student.Group,
      DoP: this.student.DoP,
    });
  }
  }

  async onDelete(){
    try{
      await this.mstudentService.deleteOneById(this.id) 
    }catch(err){
      console.error(err);
    }
    this.router.navigate(['/students']);
  }

  async onSave(){
    if(!isNullOrUndefined(this.id)){
      try{
        await this.mstudentService.putOne(this.id, this.studentForm.value)
      }catch(err){
        console.error(err);
      }
    }else{
      try{
        let res = await this.mstudentService.postOne(this.studentForm.value);
        this.router.navigate([this.router.url, res.id]);
        this.getData();
      }catch(err){
        console.error(err);
      }
    }
  } 

}