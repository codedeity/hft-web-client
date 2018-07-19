import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatTableModule } from '@angular/material';

const BASIC_MODULES = [MatButtonModule, MatInputModule, MatFormFieldModule, MatTableModule];


@NgModule({
  imports: [...BASIC_MODULES, CommonModule], // 先import
  exports: [...BASIC_MODULES, CommonModule], // 在export
})
export class SharedMaterialModule {}
