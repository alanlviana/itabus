import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinhaOnibus } from '../logic/linha-onibus';
import { LinhasService } from '../logic/linhas-service';

@Component({
  selector: 'app-detalhar-linha',
  templateUrl: './detalhar-linha.component.html',
  styleUrls: ['./detalhar-linha.component.css']
})
export class DetalharLinhaComponent implements OnInit {

  routeringPages: any;
  linha: LinhaOnibus;

  constructor(private activated: ActivatedRoute,private data: LinhasService ) { }

  ngOnInit() {
    this.routeringPages = this.activated.params.subscribe(params => {
      console.log(params['id']);
      if (params['id']) {
        this.data.get(params['id'], response => {
          this.linha = response;
        });
      }
    });

  }

}
