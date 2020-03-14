import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compartilhar',
  templateUrl: './compartilhar.component.html',
  styleUrls: ['./compartilhar.component.scss']
})
export class CompartilharComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
  }

  irParaHome(){
    console.log("Entrou no método ir para home");
    this.router.navigate(['/linhas']);
  }

  copiarEndereco(input){
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand('copy');
    input.setSelectionRange(0, 0);

    this.snackBar.open("Copiado!","", {duration: 3000})
  }
}
