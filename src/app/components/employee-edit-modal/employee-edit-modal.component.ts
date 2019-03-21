import {Component, OnInit} from '@angular/core';
import {Employee} from '../../models';
import {ModalRefService} from '../modal-dynamic/modal-ref.service';
import {NotifyMessageService} from '../../services/notify-message.service';
import {EmployeeHttpService} from '../../services/employee-http.service';

@Component({
    selector: 'employee-edit-modal',
    templateUrl: './employee-edit-modal.component.html',
    styleUrls: ['./employee-edit-modal.component.scss']
})
export class EmployeeEditModalComponent implements OnInit {

    employeeId: number;
    employee: Employee = {
        name: '',
        salary: 1,
        bonus: 0
    };

    constructor(private employeeHttp: EmployeeHttpService, private modalRef: ModalRefService, private notifyMessage: NotifyMessageService) {
        this.employeeId = this.modalRef.context['employeeId'];
    }

    ngOnInit() {
        this.employeeHttp.get(this.employeeId)
            .subscribe(data => this.employee = data); //{name, salary, bonus}
    }

    editEmployee(event) {
        this.employeeHttp.update(this.employee)
            .subscribe(data => {
                this.modalRef.hide({employee: data, submitted: true});
                this.notifyMessage.success('Sucesso', `O empregado <strong>${this.employee.name}</strong> foi alterado com sucesso`);
            });
    }
}
