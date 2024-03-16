import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilePlayload } from '../interface/file-playload';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private readonly API_URL = `/UploadFile`;

  constructor(protected http: HttpClient) { }

  getFileList(): Observable<FilePlayload[]> {
    const url = `${this.API_URL}`;
    return this.http.get<FilePlayload[]>(url, { responseType: 'blob' as 'json' });
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('formFile', file);
    return this.http.post<any>(`${this.API_URL}`, formData);
  }
}
