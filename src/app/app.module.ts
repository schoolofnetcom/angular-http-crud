import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {FormsModule} from '@angular/forms';
import {SalaryColorDirective} from './directives/salary-color.directive';
import {EmployeeNewModalComponent} from './components/employee-new-modal/employee-new-modal.component';
import {EmployeeEditModalComponent} from './components/employee-edit-modal/employee-edit-modal.component';
import {AlertSuccessComponent} from './components/alert-success/alert-success.component';
import {EmployeeDeleteModalComponent} from './components/employee-delete-modal/employee-delete-modal.component';
import {MyCurrencyPipe} from './pipes/my-currency.pipe';
import {EmployeeDetailModalComponent} from './components/employee-detail-modal/employee-detail-modal.component';
import {InputDirective} from './directives/input.directive';
import {GetViewContainerDirective} from './directives/get-view-container.directive';
import {ModalDynamicComponent} from './components/modal-dynamic/modal-dynamic/modal-dynamic.component';
import {ModalContentDirective} from './components/modal-dynamic/modal-content.directive';
import {ModalTitleComponent} from './components/modal-dynamic/modal-title/modal-title.component';
import {ModalBodyComponent} from './components/modal-dynamic/modal-body/modal-body.component';
import {ModalFooterComponent} from './components/modal-dynamic/modal-footer/modal-footer.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        EmployeeListComponent,
        SalaryColorDirective,
        EmployeeNewModalComponent,
        EmployeeEditModalComponent,
        AlertSuccessComponent,
        EmployeeDeleteModalComponent,
        MyCurrencyPipe,
        EmployeeDetailModalComponent,
        InputDirective,
        GetViewContainerDirective,
        ModalDynamicComponent,
        ModalContentDirective,
        ModalTitleComponent,
        ModalBodyComponent,
        ModalFooterComponent,
    ],
    entryComponents: [
        EmployeeListComponent,
        ModalDynamicComponent,
        EmployeeNewModalComponent,
        EmployeeEditModalComponent,
        EmployeeDeleteModalComponent,
        EmployeeDetailModalComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
