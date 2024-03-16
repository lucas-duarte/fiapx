import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileViewRoutingModule } from './file-view-routing.module';
import { FileViewComponent } from './file-view.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    FileViewComponent
  ],
  imports: [
    CommonModule,
    FileViewRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class FileViewModule { }
