import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountsPageModule } from './pages/accounts/accounts-page.module';
import { BillsPageModule } from './pages/bills/bills-page.module';
import { BudgetsPageModule } from './pages/budgets/budgets-page.module';
import { LoginModule } from './pages/login/login.module';
import { OverviewPageModule } from './pages/overview/overview-page.module';
import { SettingsPageModule } from './pages/settings/settings-page.module';
import { RallyFinanceCardModule } from './shared/components/rally-finance-card/rally-finance-card.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    RallyFinanceCardModule,
    AccountsPageModule,
    BillsPageModule,
    BudgetsPageModule,
    OverviewPageModule,
    SettingsPageModule,
    MatToolbarModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
