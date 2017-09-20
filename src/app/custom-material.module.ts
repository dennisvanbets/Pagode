import {NgModule} from '@angular/core';
import {
  MdButtonModule, MdCheckboxModule, MdChipsModule, MdListModule, MdSidenavModule, MdTableModule,
  MdToolbarModule, MdCardModule, MdExpansionModule
} from '@angular/material';

@NgModule({
  imports: [MdExpansionModule, MdButtonModule, MdCheckboxModule, MdListModule, MdSidenavModule, MdTableModule, MdToolbarModule, MdChipsModule, MdCardModule],
  exports: [MdExpansionModule, MdButtonModule, MdCheckboxModule, MdListModule, MdSidenavModule, MdTableModule, MdToolbarModule, MdChipsModule, MdCardModule]
})
export class CustomMaterialModule {}
