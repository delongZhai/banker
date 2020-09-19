import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsPageComponent } from './pages/accounts/accounts-page.component';
import { BillsPageComponent } from './pages/bills/bills-page.component';
import { BudgetsPageComponent } from './pages/budgets/budgets-page.component';
import { LoginComponent } from './pages/login/login.component';
import { OverviewPageComponent } from './pages/overview/overview-page.component';
import { SettingsPageComponent } from './pages/settings/settings-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'accounts', component: AccountsPageComponent },
  { path: 'bills', component: BillsPageComponent },
  { path: 'budgets', component: BudgetsPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'overview', component: OverviewPageComponent },
  { path: '**', redirectTo: '/overview' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
