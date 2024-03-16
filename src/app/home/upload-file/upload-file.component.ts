import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { collapseAnimation, expandAnimation } from 'src/app/core/constants/animations';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
  animations: [expandAnimation,collapseAnimation]
})
export class UploadFileComponent {

  @Output() fileEvent = new EventEmitter<File>();
  @ViewChild('customFileInput') customFileInput!: ElementRef
  @ViewChild('fileUpload') fileUpload!: ElementRef
  dragAreaClass: string = "";
  @Input() accept?: string = "*";
  selectedFile: File | undefined;
  isValid: boolean = true;

  setFile(event: any) {
    this.selectedFile = event.target.files[0];
    this.fileEvent.emit(this.selectedFile);
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
      this.selectedFile = event?.dataTransfer.files[0];
    }
  }

  deleteFile() {
    this.customFileInput.nativeElement.value = null;
    this.selectedFile = undefined;
  }

  validationInput(value: boolean){
    this.isValid = value;
  }
}
