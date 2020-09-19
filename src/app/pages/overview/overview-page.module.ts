import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RallyBudgetCardModule } from 'src/app/shared/components/rally-budget-card/rally-budget-card.module';
import { RallyFinanceCardModule } from 'src/app/shared/components/rally-finance-card/rally-finance-card.module';
import { OverviewPageComponent } from './overview-page.component';

@NgModule({
  declarations: [OverviewPageComponent],
  imports: [CommonModule, RallyFinanceCardModule, RallyBudgetCardModule],
  exports: [OverviewPageComponent],
})
export class OverviewPageModule {}
