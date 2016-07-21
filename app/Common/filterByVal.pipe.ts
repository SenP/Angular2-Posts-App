
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterByVal',
    pure: true
})

export class FilterByValPipe implements PipeTransform {

    transform(value, cond) {

        var filterObj = cond;

        if (!filterObj || !filterObj.userId || isNaN(filterObj.userId))
            return value;

        var result = [];

        value.forEach(item => {

            if (_.isMatch(item, filterObj)) {
                result.push(item);
            }
        })

        return result;
    }
}