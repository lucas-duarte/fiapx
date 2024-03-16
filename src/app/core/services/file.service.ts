import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private readonly API_URL = `/UploadFile`;

  constructor(protected http: HttpClient) { }

  getFileUploadById(id: string) {
    const url = `${this.API_URL}/${id}`;
    return this.http.get<any>(url, { responseType: 'blob' as 'json' });
  }

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('formFile', file);

    return this.http.post<any>(`${this.API_URL}`, formData);
  }
}
