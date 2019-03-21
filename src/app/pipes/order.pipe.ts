import {Pipe, PipeTransform} from '@angular/core';
import _ from 'lodash';

@Pipe({
    name: 'order',
    pure: false
})
export class OrderPipe implements PipeTransform {

    transform(collection: any[], sortColumn: { column, sort }): any {
        if (!collection) {
            return collection;
        }
        return _.orderBy(collection, [sortColumn.column], [sortColumn.sort]);
    }

}
