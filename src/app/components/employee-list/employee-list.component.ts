import {Component, OnInit} from '@angular/core';
import {Employee, EmployeeService} from '../../services/employee.service';
import {EmployeeNewModalComponent} from '../employee-new-modal/employee-new-modal.component';
import {EmployeeEditModalComponent} from '../employee-edit-modal/employee-edit-modal.component';
import {ModalService} from '../modal-dynamic/modal.service';
import {EmployeeDeleteModalComponent} from '../employee-delete-modal/employee-delete-modal.component';
import {EmployeeDetailModalComponent} from '../employee-detail-modal/employee-detail-modal.component';
import {HttpClient} from '@angular/common/http';


@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

    successMessage = {
        message: '',
        show: false
    };
    employees: Employee[] = [];
    xpto = {}
    constructor(
        public employeeService: EmployeeService,
        private modalService: ModalService,
        private http: HttpClient) {

    }

    ngOnInit() {
        this.getEmployees();
    }

    openDetailModal(employee: Employee) {
        const modalRef = this.modalService
            .create(EmployeeDetailModalComponent, {employee});
        modalRef.show();
    }

    openNewModal() {
        const modalRef = this.modalService.create(EmployeeNewModalComponent);
        modalRef.onHide.subscribe((event) => {
            const eventData = event.data;
            if (eventData && eventData.hasOwnProperty('employee')) {
                const employee = eventData.employee;
                const message = `O empregado <strong>${employee.name}</strong> foi criado com sucesso`;
                this.showSuccessMesage(message);
            }
        });
        modalRef.show();
    }

    openEditModal(employee: Employee) {
        const modalRef = this.modalService
            .create(EmployeeEditModalComponent, {employeeId: employee.id});
        modalRef.onHide.subscribe((event) => {
            const eventData = event.data;
            if (eventData && eventData.hasOwnProperty('employee')) {
                const message = `O empregado <strong>${employee.name}</strong> foi alterado com sucesso`;
                this.showSuccessMesage(message);
            }
        });
        modalRef.show();
    }

    openDestroyModal(employee: Employee) {
        const modalRef = this.modalService
            .create(EmployeeDeleteModalComponent, {employeeId: employee.id});
        modalRef.onHide.subscribe((event) => {
            const eventData = event.data;
            if (eventData && eventData.hasOwnProperty('employee')) {
                const message = `O empregado <strong>${employee.name}</strong> foi excluído com sucesso`;
                this.showSuccessMesage(message);
            }
        });
        modalRef.show();
    }

    showSuccessMesage(message) {
        this.getEmployees();
        this.successMessage.message = message;
        this.successMessage.show = true;
        setTimeout(() => {
            this.successMessage.show = false;
        }, 3000);
    }

    getEmployees() {
        this.http
            .get<Employee[]>('http://localhost:3000/employees')
            .subscribe(data => { //{data: [], meta: {pagination}}
                //console.log(data);
                this.employees = data; //{data: []}
                console.log('primeiro');
                console.log(this.employees[0].name);
            });
        console.log('segundo');
    }
}
