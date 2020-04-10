import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from '../employee';
@Pipe({
  name: 'employeeFilter'
})
export class EmployeePipe implements PipeTransform {

 transform(param1: Employee[], param2: string): Employee[] {
    if (!param1) return [];
    if(!param2) return param1;
    var search = param2.toLowerCase();
    return param1.filter((a) =>  {
      return a.name.toLowerCase().startsWith(search);
    });
   
  }

}