import {Pipe, PipeTransform} from '@angular/core';
import {Employee} from '../models';

@Pipe({
    name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

    transform(employees: Employee[], search): any {
        if (!employees) {
            return [];
        }

        if (!search && search === '') {
            return employees;
        }

        const searchLower = search.toLowerCase();
        return employees.filter(employee => {
            return employee.name.toLowerCase().includes(searchLower) || employee.salary.toString().includes(searchLower);
        });
    }

}
