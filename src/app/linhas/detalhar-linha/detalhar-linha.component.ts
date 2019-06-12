import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinhaOnibus } from '../logic/linha-onibus';
import { LinhasService } from '../logic/linhas-service';
import { CalculadorProximoHorario } from '../logic/calculador-proximo-horario';

@Component({
  selector: 'app-detalhar-linha',
  templateUrl: './detalhar-linha.component.html',
  styleUrls: ['./detalhar-linha.component.scss']
})
export class DetalharLinhaComponent implements OnInit {

  routeringPages: any;
  linha: LinhaOnibus;
  horariosVisualizacao: string[];
  diferencaTempo: any;
  proximaPartida: string;
  calculadora = new CalculadorProximoHorario();


  timer: any;

  constructor(private activated: ActivatedRoute,private linhaService: LinhasService ) { }

  ngOnInit() {
    this.routeringPages = this.activated.params.subscribe(params => {

    if (params['id']) {
        this.linhaService.get(params['id']).subscribe(
          data => {
            this.linha = data;
            this.atualizaHorariosTela(this.linha.horarios);
          },
          err => {
            console.log(err);
          }
        );
      }
    });
    
    this.timer = setInterval(()=>{
      if (this.linha != undefined){
        this.atualizaHorariosTela(this.linha.horarios);
      }
    },1000);
  }

  atualizaHorariosTela(horarios: string[]){
      this.proximaPartida = this.calculadora.formatarTempo(horarios);
      this.horariosVisualizacao = this.calculadora.obterHorariosNaOrdem(horarios);
  }
  



  ngOnDestroy(){
    clearInterval(this.timer);
  }

}
