import { Component, OnInit,ViewChild, Inject } from '@angular/core';
import { NgForm } from '@angular/forms'
import {Router,ActivatedRoute, Params} from '@angular/router';
import {FormControl} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Pregunta} from './modelo';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-sala2',
  templateUrl: './sala2.component.html',
  styleUrls: ['./sala2.component.css']
})
export class Sala2Component implements OnInit {
   
    displayedColumns = ['position', 'name'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
  
    @ViewChild(MatSort) sort: MatSort;
  
    animal: string;
    name: string;
    titulo: string="Matematica Basica 2";
    serializedDate = new FormControl((new Date()).toISOString());
    date = new FormControl(new Date());
    minDate = this.date.value;

   
    constructor(private _route:ActivatedRoute,
        private _router:Router,public dialog: MatDialog ) { }

    ngOnInit() {

        this.dataSource.sort = this.sort;
    }

    ngOnChanges() {
        
    }
    openDialog(): void {
        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
          width: '250px',
          data: { name: this.name, animal: this.animal }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          this.animal = result;
          this.add();
          this.animal="";
        });
      }
   

    
   



    visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  fruits = [
  ];
  public preguntas:String []= [];
  public pregunta="";

  add(): void {

    let value = this.animal;

    if(this.fruits.length<5){
        if ((value || '').trim()) {
              this.fruits.push({ name: value.trim() });
            }
  
            
      }
  }
  addpre(): void {

    let value = this.pregunta;
    if ((value || '').trim()) {
            this.preguntas.push(value);
            
    }
    this.pregunta="";
     
  }

  remove(fruit: any): void {
    let index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
}



@Component({
    selector: 'dialogo',
    templateUrl: 'dialogo.component.html',
  })
  export class DialogOverviewExampleDialog {
  
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }
  
   
  }
  export interface Rooms {
    name: string;
    position: number;
    puntos: number;
  }
  
  const ELEMENT_DATA: Rooms[] = [
    {position: 1, name: 'Finanzas repaso', puntos: 1752},
    {position: 2, name: 'Java Intermedio', puntos: 1321},
    {position: 3, name: 'IA ', puntos: 1242},
    {position: 4, name: 'PHP/HTML', puntos: 1112},
    {position: 5, name: 'Gestion de Procesos', puntos: 952},
    {position: 6, name: 'Procesos de Negocios', puntos: 923},
    {position: 7, name: 'Programacion Basica', puntos: 901},
    {position: 8, name: 'Literatura Contem', puntos: 820},
    {position: 9, name: 'Derecho ', puntos: 758},
    {position: 10, name: 'C++/C#', puntos: 521},
  ];
  