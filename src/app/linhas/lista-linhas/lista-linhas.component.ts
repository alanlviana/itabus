import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinhasService } from '../logic/linhas-service';
import { LinhaOnibus } from '../logic/linha-onibus';
import { CalculadorProximoHorario } from '../logic/calculador-proximo-horario';
import { DestinoOnibus } from '../logic/destino-onibus';

@Component({
  selector: 'app-lista-linhas',
  templateUrl: './lista-linhas.component.html',
  styleUrls: ['./lista-linhas.component.scss']
})
export class ListaLinhasComponent implements OnInit {

  linhas: LinhaDetalheTempo[];

  interval: any;

  constructor(private router: Router, private data: LinhasService) { 
  }

  obterDetalhes(id) {
    this.router.navigate(['/linhas', id]);
  }

  atualizarLista(){
    this.data.getList().subscribe(
      data =>{
        this.linhas = data.map(linha => {
          let linhaDetalhe = new LinhaDetalheTempo(linha);
          return linhaDetalhe;
        });
        this.atualizaHorarioLinhas();
      },
      err => {
        console.log(err);
      }
    );
  }

  atualizaHorarioLinhas(){
    this.linhas.forEach(linha => linha.atualizaHorariosDestino());
  }


  ngOnInit() {
    this.atualizarLista();
    this.interval = setInterval(()=>{
      if (this.linhas != undefined){
        this.atualizaHorarioLinhas();
      }
    }, 1000)
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }
}

class LinhaDetalheTempo{

  calculadora : CalculadorProximoHorario;
  detalhesDestinos: DestinoDetalheTempo[];

  constructor(public linha: LinhaOnibus){
    this.calculadora = new CalculadorProximoHorario();

    this.detalhesDestinos = linha.destinos.map(destino => {
      let destinoDetalheTempo = new DestinoDetalheTempo(destino);
      return destinoDetalheTempo;
    })
  }

  public atualizaHorariosDestino(){
    this.detalhesDestinos.forEach(destinoDetalhe => {
      destinoDetalhe.contagemRegressiva = this.calculadora.formatarTempo(destinoDetalhe.destino.horarios);
      destinoDetalhe.proximaPartida = this.calculadora.proximoHorario(destinoDetalhe.destino.horarios);
    });
  }

}

class DestinoDetalheTempo{
  public proximaPartida: string;
  public contagemRegressiva: string;

  constructor(public destino: DestinoOnibus){

  }
}