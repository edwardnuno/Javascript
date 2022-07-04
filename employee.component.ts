import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  empId: number = 1234;
  empName: string = 'Edward Nuno';
  empSal: string = '$3,000';
  empDesignation: string = 'Software Engineer';

  ngOnInit(): void {}
}
