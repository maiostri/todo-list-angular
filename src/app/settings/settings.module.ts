import { MultiplicaPorDois } from './about/multiplica-por-dois';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AboutComponent,
    MultiplicaPorDois
  ],
  imports: [
    CommonModule
  ],
  exports: [AboutComponent]
})
export class SettingsModule { }
