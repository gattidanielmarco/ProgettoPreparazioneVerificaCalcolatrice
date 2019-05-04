import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-ris-component',
  templateUrl: './ris-component.component.html',
  styleUrls: ['./ris-component.component.css']
})
export class RisComponentComponent implements OnInit {
@Input() ris: number;
@Input() rV: number[];
  constructor() { }

  ngOnInit() {
  }

}
