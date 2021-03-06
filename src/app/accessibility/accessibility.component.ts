import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { Global } from './../core/global';

import { Record } from './../core/record.model';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.css']
})

export class AccessibilityComponent implements OnInit {
 
  public record: Record;
  public records: Array<Record>;

  public currentRecord: string;
  
  constructor (private router: Router,
		           private global: Global) { }

  ngOnInit() {

    this.global.path = this.router.url;
    this.record = new Record({});

  }

  onSubmit(newForm: NgForm): void {
    //
    this.currentRecord = JSON.stringify(this.record);
    console.log(JSON.stringify(this.record));
    //
    newForm.reset();
  }

  getFocus(eleId: string): void {
    console.log('hello world');        
    document.getElementById(eleId).focus();
  }

}
