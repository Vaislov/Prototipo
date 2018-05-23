import { Component, OnInit,ViewChild, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms'
import {Router,ActivatedRoute, Params} from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit, OnChanges {

    
   
    constructor(private _route:ActivatedRoute,
        private _router:Router ) { }

    ngOnInit() {
    }

    ngOnChanges() {
    }

   
}