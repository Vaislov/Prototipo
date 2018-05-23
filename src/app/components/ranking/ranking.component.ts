import { Component, OnInit,ViewChild, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms'
import {Router,ActivatedRoute, Params} from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit, OnChanges {

    
   
    constructor(private _route:ActivatedRoute,
        private _router:Router ) { }

    ngOnInit() {
    }

    ngOnChanges() {
    }

   
}