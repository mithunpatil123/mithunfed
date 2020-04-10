import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeePipe } from './employee.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmployeePipe],
  exports:[EmployeePipe]
  
})
export class SharedModule { }