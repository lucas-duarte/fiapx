import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFileComponent } from './upload-file.component';
import { MatChipsModule } from '@angular/material/chips';



@NgModule({
  declarations: [
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule
  ],
  exports: [
    UploadFileComponent
  ]
})
export class UploadFileModule { }
