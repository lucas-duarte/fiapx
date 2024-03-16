import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})

export class FileSizePipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined || isNaN(value) || value === 0) {
      return '0 Bytes';
    }

    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const digitGroups = Math.floor(Math.log(value) / Math.log(1024));

    return parseFloat((value / Math.pow(1024, digitGroups)).toFixed(2)) + ' ' + units[digitGroups];
  }
}
