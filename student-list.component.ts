import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: any[] = [
    { id: 1, name: 'Usama Anwar', grade: 'A' },
    { id: 2, name: 'Bilal Zahid', grade: 'B' },
    { id: 3, name: 'Yasir Iqbal', grade: 'A-' },
    { id: 4, name: 'Ahsan Mujtaba', grade: 'C' }
  ];
}
