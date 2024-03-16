import { Component } from '@angular/core';
import { fadeInAnimation, fadeOutAnimation } from '../core/constants/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation]
})
export class HomeComponent {

  displayButtonUpload: boolean = false;
  file!: File;

  getFile(file: File) {
    if (file) {
      this.displayButtonUpload = true;
      this.file = file;
      console.log(file);
      return
    }
    this.displayButtonUpload = false;
  }

  uploadFile(){
    
  }

  downloadFile(){}

  removeFile(){}
}
