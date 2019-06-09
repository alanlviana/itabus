import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinhasService } from '../logic/linhas-service';
import { LinhaOnibus } from '../logic/linha-onibus';
import { CalculadorProximoHorario } from '../logic/calculador-proximo-horario';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-lista-linhas',
  templateUrl: './lista-linhas.component.html',
  styleUrls: ['./lista-linhas.component.scss']
})
export class ListaLinhasComponent implements OnInit {

  linhas: LinhaOnibus[];

  constructor(private router: Router, private data: LinhasService, private swUpdate: SwUpdate) { 

  }

  ngAfterContentInit(){
    console.log("Buscando por atualizações.");
    if (this.swUpdate.isEnabled){
      this.swUpdate.checkForUpdate();
    }
  }  

  obterDetalhes(id) {

    this.router.navigate(['/linhas', id]);
  }

  atualizarLista(){
    this.data.getList(response => {
      this.linhas = response;
    });
  }

  ngOnInit() {
    this.atualizarLista();
  }

  ngOnDestroy(){
    
  }
}
