import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {
  transform(students: any[], searchStr: string): any[] {
    if (searchStr === '') {
      return students;
    } else {
      let filterStudents = students.filter((student) =>
        (student.name.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1) || (student.surname.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1));
      return filterStudents;
    }
  }
}

