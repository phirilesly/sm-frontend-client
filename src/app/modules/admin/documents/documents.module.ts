import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentsComponent } from './documents.component';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FuseCardModule } from '@fuse/components/card';
import { MatButtonModule } from '@angular/material/button';

const documentsRoutes: Route[] = [
  {
      path     : '',
      component: DocumentsComponent
  }
];


@NgModule({
  declarations: [
    DocumentsComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FuseCardModule,
    MatButtonModule,
    RouterModule.forChild(documentsRoutes)
  ]
})
export class DocumentsModule { }
