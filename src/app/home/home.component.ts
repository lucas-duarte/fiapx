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
  files: File[] = [];

  getFile(file: File[]) {
    if (file) {
      this.displayButtonUpload = true;
      this.files = file;
      console.log(file);
      return
    }
    this.displayButtonUpload = false;
  }

  uploadFile(){
    
  }

  downloadFile(){}

  removeFile(index: number): void {
    this.files.splice(index, 1); // Remove o arquivo do array
    if (this.files.length === 0) {
      this.displayButtonUpload = false; // Se não houver mais arquivos, esconde o botão de upload
    }
  }
}
