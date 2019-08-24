import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinhaOnibus } from '../logic/linha-onibus';
import { LinhasService } from '../logic/linhas-service';
import { CalculadorProximoHorario } from '../logic/calculador-proximo-horario';
import { DestinoOnibus } from '../logic/destino-onibus';

@Component({
  selector: 'app-detalhar-linha',
  templateUrl: './detalhar-linha.component.html',
  styleUrls: ['./detalhar-linha.component.scss']
})
export class DetalharLinhaComponent implements OnInit {

  routeringPages: any;
  linha: LinhaOnibus;
  horariosDestinos: HorariosDestino[];

  timer: any;

  constructor(private activated: ActivatedRoute,private linhaService: LinhasService) { }

  ngOnInit() {
    this.routeringPages = this.activated.params.subscribe(params => {

    if (params['id']) {
        this.linhaService.get(params['id']).subscribe(
          data => {
            this.linha = data;
            this.horariosDestinos = this.linha.destinos.map(destino => {
              let horarioDestino = new HorariosDestino(destino);
              return horarioDestino;
            });
            this.atualizaHorariosDestinos();
          },
          err => {
            console.log(err);
          }
        );
      }
    });
    
    this.timer = setInterval(()=>{
      if (this.linha != undefined){
        this.atualizaHorariosDestinos();
      }
    },1000);
  }

  atualizaHorariosDestinos(){
    this.horariosDestinos.forEach(horariosDestino => {
      horariosDestino.atualizaHorariosDestino();
    });
  }
  
  ngOnDestroy(){
    clearInterval(this.timer);
  }

}

class HorariosDestino{

  public proximaPartida:string;
  public horariosVisualizacao:string[];

  constructor(public destino: DestinoOnibus){

  }

  atualizaHorariosDestino(){
    let calculadora = new CalculadorProximoHorario();
    this.proximaPartida = calculadora.formatarTempo(this.destino.horarios);
    this.horariosVisualizacao = calculadora.obterHorariosNaOrdem(this.destino.horarios);
  }


  

}