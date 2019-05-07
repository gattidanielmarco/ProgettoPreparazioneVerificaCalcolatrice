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
  ris:Ris;
   myForm: FormGroup;
  constructor(fb: FormBuilder){
    this.myForm = fb.group({
      'numero1':[0,Validators.required],
      'numero2':[0,Validators.required]

    });
  }
  somma(n1:HTMLInputElement,n2:HTMLInputElement):Boolean{
    if(!this.myForm.invalid){
      let valori= Number(this.myForm.controls['numero1'].value) + Number(this.myForm.controls['numero2'].value);
      this.ris= new Ris();
      this.ris.numero1= Number(this.myForm.controls['numero1'].value);
      this.ris.numero2= Number(this.myForm.controls['numero2'].value);
    }
    
    return false;
  }
  moltiplicazione(n1:HTMLInputElement,n2:HTMLInputElement):Boolean{
    if(!this.myForm.invalid){
      let valori= Number(this.myForm.controls['numero1'].value) * Number(this.myForm.controls['numero2'].value);
      this.ris= new Ris();
      this.ris.numero1= Number(this.myForm.controls['numero1'].value);
      this.ris.numero2= Number(this.myForm.controls['numero2'].value);
    }
    return false;
  }
  sottrazione(n1:HTMLInputElement,n2:HTMLInputElement):Boolean{
    if(!this.myForm.invalid){
      let valori= Number(this.myForm.controls['numero1'].value) - Number(this.myForm.controls['numero2'].value);
      this.ris= new Ris();
      this.ris.numero1= Number(this.myForm.controls['numero1'].value);
      this.ris.numero2= Number(this.myForm.controls['numero2'].value);
    }
    return false;
  }
  divisione(n1:HTMLInputElement,n2:HTMLInputElement):Boolean{
    if(!this.myForm.invalid){
      let valori= Number(this.myForm.controls['numero1'].value) / Number(this.myForm.controls['numero2'].value);
      this.ris= new Ris();
      this.ris.numero1= Number(this.myForm.controls['numero1'].value);
      this.ris.numero2= Number(this.myForm.controls['numero2'].value);
    }
    return false;
  }
   ngOnInit() {
  }
  

}
