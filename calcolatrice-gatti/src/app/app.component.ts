import { Component, OnInit } from '@angular/core';
import {Ris} from './ris.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'calcolatrice-gatti';
  ris:number;
   myForm: FormGroup;
   risV:number[];
  constructor(fb: FormBuilder){
    this.myForm = fb.group({
      'numero1':['numero1',Validators.required],
      'numero2':['numero2',Validators.required]

    });
  }
  somma(n1:HTMLInputElement,n2:HTMLInputElement):Boolean{
    this.ris = Number(n1.value) + Number(n2.value);
    this.numDaPass(Number(n1.value),Number(n2.value));
    return false;
  }
  moltiplicazione(n1:HTMLInputElement,n2:HTMLInputElement):Boolean{
    this.ris = Number(n1.value) * Number(n2.value);
    this.numDaPass(Number(n1.value),Number(n2.value));
    return false;
  }
  sottrazione(n1:HTMLInputElement,n2:HTMLInputElement):Boolean{
    this.ris = Number(n1.value) - Number(n2.value);
    this.numDaPass(Number(n1.value),Number(n2.value));
    return false;
  }
  divisione(n1:HTMLInputElement,n2:HTMLInputElement):Boolean{
    this.ris = Number(n1.value) / Number(n2.value);
    this.numDaPass(Number(n1.value),Number(n2.value));
    return false;
  }
   ngOnInit() {
  }
  numDaPass(n1:number,n2:number):Boolean{
    if (n1 < n2){
      let n = n2;
      n2 = n1;
      n1 = n;
    }
    this.risV = new Array<number>();
    for(let i = n1; i <=n2; i++){
      console.log(i);
      this.risV.push(i);
    }
    return false;
  }

}
