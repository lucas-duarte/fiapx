import { Component, OnInit } from '@angular/core';
import { fadeInAnimation, fadeOutAnimation } from 'src/app/core/constants/animations';
import { FilePlayload } from 'src/app/core/interface/file-playload';
import { FileService } from 'src/app/core/services/file.service';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation]
})
export class FileViewComponent implements OnInit {

  displayButtonUpload: boolean = false;
  files: FilePlayload[] = [];

constructor(private fileService: FileService){}
  ngOnInit(): void {
    // this.fileService.getFileList().subscribe({
    //   next: response => {
        
    //   }
    // })
    this.files = [{
      "nome": "Arquivo1.mp4",
      "usuario": "Tiago",
      "diretorioVideo": "C:/teste",
      "diretorioZip": ""
    },
    {
      "nome": "Arquivo2.mp4",
      "usuario": "Tiago",
      "diretorioVideo": "C:/teste",
      "diretorioZip": ""
    }] as FilePlayload[]
  }
  
  downloadFile() { }

}
