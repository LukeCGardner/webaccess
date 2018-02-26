import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Record } from './../core/record.model';

@Component({
  selector: 'app-accessibility',
  templateUrl: './accessibility.component.html',
  styleUrls: ['./accessibility.component.css']
})

export class AccessibilityComponent implements OnInit {

  public record: Record;
  public records: Array<Record>;
  

  constructor() { }

  ngOnInit() {

    this.record = new Record({});

  }

  onSubmit(newForm: NgForm): void {
    //
    console.log(JSON.stringify(this.record));
    //
    newForm.reset();
  }

}
