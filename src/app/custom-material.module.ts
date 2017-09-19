import {NgModule} from '@angular/core';
import {
  MdButtonModule, MdCheckboxModule, MdChipsModule, MdListModule, MdSidenavModule, MdTableModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdListModule, MdSidenavModule, MdTableModule, MdToolbarModule, MdChipsModule],
  exports: [MdButtonModule, MdCheckboxModule, MdListModule, MdSidenavModule, MdTableModule, MdToolbarModule, MdChipsModule]
})
export class CustomMaterialModule {}
