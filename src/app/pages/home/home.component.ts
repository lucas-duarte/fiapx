import { Component, OnInit } from '@angular/core';
import { fadeInAnimation, fadeOutAnimation } from '../../core/constants/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileService } from 'src/app/core/services/file.service';
import { FilePlayload } from 'src/app/core/interface/file-playload';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInAnimation, fadeOutAnimation]
})
export class HomeComponent implements OnInit {

  form!: FormGroup

  constructor(private formBuilder: FormBuilder, private fileService: FileService) {

  }
  ngOnInit(): void {
    this.initialForm()
  }

  displayButtonUpload: boolean = false;
  files: File[] = [];

  initialForm() {
    this.form = this.formBuilder.group({
      usuario: ['', Validators.required]
    });
  }

  getFile(file: File[]) {
    if (file) {
      this.displayButtonUpload = true;
      this.files = file;
      console.log(file);
      return
    }
    this.displayButtonUpload = false;
  }

  get usuario() {
    return this.form.get('usuario')?.value
  }

  submitFile() {

    const filePayload: FilePlayload[] = [];

    this.files.forEach(f => {
      filePayload.push({
        "nome": f.name,
        "usuario": this.usuario,
        "diretorioVideo": "assets/videos",
        "diretorioZip": ""
      } as FilePlayload)
    })

    this.fileService.uploadFile(filePayload).subscribe({
      next: response => {

      },
      error: response => {
        console.log(response)
      }
    })

  }

  removeFile(index: number): void {
    this.files.splice(index, 1); // Remove o arquivo do array
    if (this.files.length === 0) {
      this.displayButtonUpload = false; // Se não houver mais arquivos, esconde o botão de upload
    }
  }
}
