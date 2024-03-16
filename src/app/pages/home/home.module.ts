import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UploadFileModule } from './upload-file/upload-file.module';
import { FileSizePipe } from '../../core/pipes/file-size.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    FileSizePipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatButtonModule,
    UploadFileModule
  ]
})

export class HomeModule { }
