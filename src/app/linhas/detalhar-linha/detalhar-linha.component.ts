import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinhaOnibus } from '../logic/linha-onibus';
import { LinhasService } from '../logic/linhas-service';
import { CalculadorProximoHorario } from '../logic/calculador-proximo-horario';

@Component({
  selector: 'app-detalhar-linha',
  templateUrl: './detalhar-linha.component.html',
  styleUrls: ['./detalhar-linha.component.css']
})
export class DetalharLinhaComponent implements OnInit {

  routeringPages: any;
  linha: LinhaOnibus;
  horariosVisualizacao: string[];
  diferencaTempo: any;

  constructor(private activated: ActivatedRoute,private data: LinhasService ) { }

  ngOnInit() {
    this.routeringPages = this.activated.params.subscribe(params => {

      if (params['id']) {
        this.data.get(params['id'], response => {
          this.linha = response;
        });
      }
    });
  }

  ngOnDestroy(){
    
  }

}
