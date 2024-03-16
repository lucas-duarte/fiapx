import { Component } from '@angular/core';
import { fadeInAnimation, fadeOutAnimation } from 'src/app/core/constants/animations';
import { FileService } from 'src/app/core/services/file.service';

@Component({
  selector: 'app-file-view',
  templateUrl: './file-view.component.html',
  styleUrls: ['./file-view.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation]
})
export class FileViewComponent {

constructor(private fileService: FileService){}

  displayButtonUpload: boolean = false;
  files: File[] = [];

}
