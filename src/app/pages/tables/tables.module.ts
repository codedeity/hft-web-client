import { NgModule } from '@angular/core';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
//import { SmartTableService } from '../../@core/data/smart-table.service';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    MatTableModule,
    MatFormFieldModule,
 //   Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
   // SmartTableService,
  ],
})
export class TablesModule { }
