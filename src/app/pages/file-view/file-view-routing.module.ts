import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileViewComponent } from './file-view.component';

const routes: Routes = [
  { path: '', component: FileViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileViewRoutingModule { }
