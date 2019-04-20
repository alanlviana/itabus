import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'itabus';

  constructor(private router: Router) { 

  }

  irParaLinhas() {
    this.router.navigate(['/linhas']);
  }

  onActivate(event){
    window.scrollTo(0,0);
  }

}
