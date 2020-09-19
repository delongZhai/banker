import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BudgetsPageComponent } from './budgets-page.component';

@NgModule({
  declarations: [BudgetsPageComponent],
  imports: [CommonModule],
  exports: [BudgetsPageComponent],
})
export class BudgetsPageModule {}
