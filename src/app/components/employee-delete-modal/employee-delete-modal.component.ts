import {Component, OnInit} from '@angular/core';
import {Employee, EmployeeService} from '../../services/employee.service';
import {ModalRefService} from '../modal-dynamic/modal-ref.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'employee-delete-modal',
    templateUrl: './employee-delete-modal.component.html',
    styleUrls: ['./employee-delete-modal.component.css']
})
export class EmployeeDeleteModalComponent implements OnInit {

    employeeId: number;
    employee: Employee = {
        name: '',
        salary: 1,
        bonus: 0
    };

    constructor(private http: HttpClient, private modalRef: ModalRefService) {
        this.employeeId = this.modalRef.context['employeeId'];
    }

    ngOnInit() {
        this.http
            .get<Employee>(`http://localhost:3000/employees/${this.employeeId}`)
            .subscribe(data => this.employee = data); //{name, salary, bonus}
    }

    destroy() {
        this.http
            .delete(`http://localhost:3000/employees/${this.employee.id}`)
            .subscribe(data => this.modalRef.hide({employee: this.employee, submitted: true}));
    }
}
