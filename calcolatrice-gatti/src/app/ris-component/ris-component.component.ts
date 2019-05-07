import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Ris} from '../ris.module';
@Component({
  selector: 'app-ris-component',
  templateUrl: './ris-component.component.html',
  styleUrls: ['./ris-component.component.css']
})
export class RisComponentComponent implements OnInit {
@Input() r: Ris;
myForm: FormGroup;
visua: number;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'email':['',[Validators.required,Validators.email]]});
  }

  ngOnInit() {
  }
  onSubmit(){
    console.log("invio email a:" + this.myForm.controls['email'].value + "i valori sono:" + this.r.numero1 + "e" + this.r.numero2);
  }
  daA(){
    for(let i = this.r.numero1; i <= this.r.numero2;i++){
      this.visua = i;
      console.log(i);
    }
  }

}
