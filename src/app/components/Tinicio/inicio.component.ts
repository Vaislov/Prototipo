import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import {Router,ActivatedRoute, Params} from '@angular/router';
import {FormControl} from '@angular/forms';
import {MatSort, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
    
    
    displayedColumns = ['position', 'name', 'puntos'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
  
    @ViewChild(MatSort) sort: MatSort;
  
      serializedDate = new FormControl((new Date()).toISOString());
      date = new FormControl(new Date());
      minDate = this.date.value;
  
     
      constructor(private _route:ActivatedRoute,
          private _router:Router ) { }
  
      ngOnInit() {
          this.dataSource.sort = this.sort;
      }
  
      ngOnChanges() {
          this.valida();
          
      }
  
     
  
      public model="";
      public model2="";
      public evento=this.date.value;
      public horas="9:53 PM";
      public partis=2;
  
      valida(){
          if (this.partis > 20)
              this.partis=20;
          if (this.partis < 1)
              this.partis=1;
      }

}


export interface PeriodicElement {
    name: string;
    position: number;
    puntos: number;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Ander', puntos: 1752},
    {position: 2, name: 'Harry', puntos: 1321},
    {position: 3, name: 'Tania', puntos: 1242},
    {position: 4, name: 'Luka', puntos: 1112},
    {position: 5, name: 'Ivan', puntos: 952},
    {position: 6, name: 'Frank', puntos: 923},
    {position: 7, name: 'Samuel', puntos: 901},
    {position: 8, name: 'Ariel', puntos: 820},
    {position: 9, name: 'Senia', puntos: 758},
    {position: 10, name: 'Noelia', puntos: 521},
  ];
  