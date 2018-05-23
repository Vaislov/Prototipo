import { Component, OnInit, OnChanges } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';
import {MatSnackBar} from '@angular/material';

declare var JQuery:any;
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'app';
  public a = false;
  public sidenav: any;
  constructor(public snackBar: MatSnackBar){

  }

  ngOnInit(){
  }
  ngOnChanges(){
    
  }
  openSnackBar() {
    this.snackBar.openFromComponent(Confiable, {
      duration: 1500,
    });
  }
  
  
}
@Component({
  selector: 'snack',
  templateUrl: './components/sala/snack.component.html',
  styles: [`.example { color: hotpink; }`],
})
export class Confiable {}