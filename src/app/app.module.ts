
import { InicioComponent } from './components/Tinicio/inicio.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { PrincipalComponent } from './components/principal/principal.component';
import { SalaComponent } from './components/sala/sala.component';
import { Sala2Component,DialogOverviewExampleDialog } from './components/sala2/sala2.component';

import { RankingComponent } from './components/ranking/ranking.component';
import { Confiable } from './app.component';

import {MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSortModule,MatTableModule,MatDialogModule, MatFormFieldModule, MatInputModule,  MatSnackBarModule,MatButtonModule, MatChipsModule } from '@angular/material';
import { LOCALE_ID } from '@angular/core';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SalaComponent,
    InicioComponent,
    RankingComponent,
    Sala2Component,
    Confiable,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatButtonModule,
    MatChipsModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule
  ],
  entryComponents: [AppComponent, Confiable, DialogOverviewExampleDialog,Sala2Component,InicioComponent],
  providers: [appRoutingProviders, { provide: LOCALE_ID, useValue: 'pe' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
