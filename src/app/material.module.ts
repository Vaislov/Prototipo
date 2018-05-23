import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule
  ],
  exports: [
    MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule
  ]
})
export class MaterialModule {}