import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
// import { SmartTableComponent } from './smart-table/smart-table.component';
import { StockTrendTableComponent } from './stock-trend/stock-trend.component';
const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
  {
    path: 'stock-trend',
    component: StockTrendTableComponent,
  },
  { path: '', redirectTo: 'stock-trend', pathMatch: 'full' },
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
// SmartTableComponent,
  StockTrendTableComponent,
];
