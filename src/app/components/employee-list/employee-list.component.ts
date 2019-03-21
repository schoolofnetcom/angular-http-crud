import {Component, OnInit} from '@angular/core';
import {Employee} from '../../models';
import {EmployeeNewModalComponent} from '../employee-new-modal/employee-new-modal.component';
import {EmployeeEditModalComponent} from '../employee-edit-modal/employee-edit-modal.component';
import {ModalService} from '../modal-dynamic/modal.service';
import {EmployeeDeleteModalComponent} from '../employee-delete-modal/employee-delete-modal.component';
import {EmployeeDetailModalComponent} from '../employee-detail-modal/employee-detail-modal.component';
import {EmployeeHttpService} from '../../services/employee-http.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NotifyMessageService} from '../../services/notify-message.service';


@Component({
    selector: 'employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

    employees: Employee[] = [];
    search = '';
    sortColumn = {column: 'name', sort: 'asc'};
    pagination = {
        itemsPerPage: 1,
        currentPage: 1,
        totalItems: 0
    };

    constructor(
        private modalService: ModalService, private employeeHttp: EmployeeHttpService,
        private notifyMessage: NotifyMessageService) {
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
            this.getEmployeesAfterSuccess(event);
        });
        modalRef.show();
    }

    openEditModal(employee: Employee) {
        const modalRef = this.modalService
            .create(EmployeeEditModalComponent, {employeeId: employee.id});
        modalRef.onHide.subscribe((event) => {
            this.getEmployeesAfterSuccess(event);
        });
        modalRef.show();
    }

    openDestroyModal(employee: Employee) {
        const modalRef = this.modalService
            .create(EmployeeDeleteModalComponent, {employeeId: employee.id});
        modalRef.onHide.subscribe((event) => {
            this.getEmployeesAfterSuccess(event);
        });
        modalRef.show();
    }

    getEmployeesAfterSuccess(event) {
        const eventData = event.data;
        if (eventData && eventData.hasOwnProperty('submitted')) {
            this.getEmployees();
        }
    }

    handleSearch(search) {
        this.search = search;
        this.pagination.currentPage = 1;
        this.getEmployees();
    }

    handleSort($event) {
        this.getEmployees();
    }

    handlePagination(page) {
        this.pagination.currentPage = page;
        this.getEmployees();
    }

    getEmployees() {
        this.employeeHttp.list({
            search: this.search,
            sort: this.sortColumn,
            pagination: {
                page: this.pagination.currentPage,
                perPage: this.pagination.itemsPerPage
            }
        })
            .subscribe(response => { //{ data: [], pagination: {total: 9, current_page: 2} }
                this.pagination.totalItems = +response.headers.get('X-Total-Count');
                this.employees = response.body; //{data: []}
                console.log('primeiro');
                console.log(this.employees[0].name);
            });
            // }, (responseError: HttpErrorResponse) => {
            //     if (responseError.status === 404) {
            //         this.notifyMessage.error('Erro', 'Recurso não encontrado');
            //     }
            //
            //
            // });
        console.log('segundo');
    }
}

// //pure function
// function soma(param1, param2) {
//     return param1 + param2;
// }
//
// soma(1, 2); //3
// soma(1, 2); //3
//
// //impure function
// const contador = function () {
//     let count = 0;
//     return function (valor) {
//         return count += valor;
//     };
// }();
//
// contador(1); //1
// contador(1); //2
// contador(1); //3
// contador(1);
