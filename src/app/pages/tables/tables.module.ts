import { NgModule } from '@angular/core';
// import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
// import { SmartTableService } from '../../@core/data/smart-table.service';
import { SharedMaterialModule } from '../../@shared/material';
@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    SharedMaterialModule,
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
