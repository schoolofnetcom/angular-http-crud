import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Employee, EmployeeService} from '../../services/employee.service';
import {InputDirective} from '../../directives/input.directive';
import {ModalRefService} from '../modal-dynamic/modal-ref.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'employee-new-modal',
    templateUrl: './employee-new-modal.component.html',
    styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent implements OnInit, OnDestroy {

    employee: Employee = {
        name: '',
        salary: 0,
        bonus: 0,
    };

    // @ViewChild(InputDirective)
    // inputName: InputDirective;

    @ViewChild('inputSalary', {read: InputDirective})
    inputName: InputDirective;//ElementRef

    constructor(private http: HttpClient,
                private employeeService: EmployeeService,
                private modalRef: ModalRefService) {
    }

    ngOnInit() {
        this.modalRef.onShow.subscribe(() => {
            console.log(this.inputName);
            this.inputName.focus();
        });
    }

    addEmployee(event) {
        this.http
            .post('http://localhost:3000/employees', this.employee)
            .subscribe(
                data => this.modalRef.hide({employee: data, submitted: true})
            );
    }

    ngOnDestroy(): void {
        console.log('employee new modal destruído');
    }
}
