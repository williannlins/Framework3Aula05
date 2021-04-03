import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './Components/calculadora.component';



@NgModule({
  declarations: [CalculadoraComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CalculadoraComponent
  ]
})
export class CalculadoraModule { }
