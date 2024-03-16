import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { collapseAnimation, expandAnimation } from 'src/app/core/constants/animations';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
  animations: [expandAnimation,collapseAnimation]
})
export class UploadFileComponent {

  @Output() fileEvent = new EventEmitter<File[]>();
  @ViewChild('customFileInput') customFileInput!: ElementRef
  @ViewChild('fileUpload') fileUpload!: ElementRef
  dragAreaClass: string = "";
  @Input() accept?: string = "*";
  selectedFiles: File[] = [];
  isValid: boolean = true;

  setFile(event: any) {
    this.selectedFiles = Array.from(event.target.files);
    this.fileEvent.emit(this.selectedFiles);
  }

  onFileSelected() {
    this.customFileInput.nativeElement.click();
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.dragAreaClass = "drag-over";
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragAreaClass = "";
    event.stopPropagation();
    if (event.dataTransfer?.files) {
      this.selectedFiles = Array.from(event.dataTransfer.files);
      this.fileEvent.emit(this.selectedFiles);
    }
  }

  deleteFile() {
    this.customFileInput.nativeElement.value = null;
    this.selectedFiles = [];
  }

  validationInput(value: boolean){
    this.isValid = value;
  }
}
