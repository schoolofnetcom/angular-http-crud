import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    employees = {
        data: [
            {name: 'Fulano da Silva', salary: 1000, bonus: 0},
            {name: 'Cicrano da Silva', salary: 10000, bonus: 0},
            {name: 'Beltrano da Silva', salary: 900, bonus: 5},
            {name: 'Funcionario X', salary: 800, bonus: 10},
            {name: 'Funcionario Y', salary: 700, bonus: 100},
            {name: 'Funcionario Z', salary: 600, bonus: 1000},
        ]
    };

    constructor() {
    }

    // addEmployee(employee: Employee) {
    //     employee.bonus = employee.salary >= 1000 ? 0 : employee.bonus;
    //     this.employees.push(employee);
    // }
    //
    // destroyEmployee(employee: Employee) {
    //     const index = this.employees.indexOf(employee);
    //     this.employees.splice(index, 1);
    // }
}
