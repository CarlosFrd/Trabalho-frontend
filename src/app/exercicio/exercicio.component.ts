import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.component.html',
  styleUrls: ['./exercicio.component.css']
})
export class ExercicioComponent {
  frase = 'Olá mundo';
  opa = 'https://chat.openai.com/'
  cor = ''
  back = ''
  texto: any;
  mudaCor(){
    if (this.cor=='aqua'){
      this.cor = 'black'
      this.back = 'white'
    }else{
      this.cor = 'aqua'
      this.back = 'black'
    }
  }
  getChange(value: any){
    console.log(value)
    this.texto = value.toString()
  }
}
