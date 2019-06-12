import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinhasService } from '../logic/linhas-service';
import { LinhaOnibus } from '../logic/linha-onibus';
import { CalculadorProximoHorario } from '../logic/calculador-proximo-horario';

@Component({
  selector: 'app-lista-linhas',
  templateUrl: './lista-linhas.component.html',
  styleUrls: ['./lista-linhas.component.scss']
})
export class ListaLinhasComponent implements OnInit {

  linhas: LinhaDetalheTempo[];
  calculadora : CalculadorProximoHorario;

  interval: any;

  constructor(private router: Router, private data: LinhasService) { 
    this.calculadora = new CalculadorProximoHorario();
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
        this.atualizaHorariosLista();
      },
      err => {
        console.log(err);
      }
    );
  }

  atualizaHorariosLista(){
    this.linhas.forEach(linha => {
      linha.contagemRegressiva = this.calculadora.formatarTempo(linha.linha.horarios);
      linha.proximaPartida = this.calculadora.proximoHorario(linha.linha.horarios);
    });
  }

  




  ngOnInit() {
    this.atualizarLista();
    this.interval = setInterval(()=>{
      if (this.linhas != undefined){
        this.atualizaHorariosLista();
      }
    }, 1000)
  }

  ngOnDestroy(){
    clearInterval(this.interval);
  }
}

class LinhaDetalheTempo{
  public proximaPartida: string;
  public contagemRegressiva: string;

  constructor(public linha: LinhaOnibus){
  }
}