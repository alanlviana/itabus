import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'itabus';

  constructor(private router: Router, private snackBar: MatSnackBar, private swUpdate: SwUpdate, private angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) { 
    angulartics2GoogleAnalytics.startTracking();
  }

  irParaLinhas() {
    this.router.navigate(['/linhas']);
  }

  onActivate(event){
    window.scrollTo(0,0);
    if (this.swUpdate.isEnabled){
      this.swUpdate.checkForUpdate();
    }
  }

  exibeBotaoLinhas(){
    return this.router.url != "/linhas";
  }

  ngOnInit(){
    console.log("ngOnInit()");

    // Verificar se existe uma atualização
    if (this.swUpdate.isEnabled){
      this.swUpdate.available.subscribe((event)=>{
        console.log("[App] Atualização disponível: A versão atual é:", event.current, " e a versão disponível é ", event.available);

        const snackBarRef = this.snackBar.open("Atualização disponível ("+event.available.appData["version"]+")!", "Atualizar agora!");
        snackBarRef.onAction().subscribe(()=>{
          window.location.reload();
        });
      });
    }

    // Dispositivos iOS no navegador
    if ((navigator as any).standalone === false){
      this.snackBar.open("Você pode adicionar essa PWA para a sua Home Screen", "", {duration: 3000})
    }

    
    // Dispositivos não-iOS
    if ((navigator as any).standalone === undefined) {
      // Se estiver no navegador
      if (window.matchMedia('(display-mode: browser').matches) {
        window.addEventListener('beforeinstallprompt', event => {
          event.preventDefault();
          const sb = this.snackBar.open("Você quer instalar esse app?", "Instalar", {duration: 5000});
          sb.onAction().subscribe(()=>{
            (event as any).prompt();
            (event as any).userChoice.then(result => {
              if (result.outcome === 'dismissed'){
                // Não instalado
              }else{
                // Instalado
              }
            })
          })
        })
      }
    }
  }

}
