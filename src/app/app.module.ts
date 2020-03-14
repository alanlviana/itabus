import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LinhasModule } from './linhas/linhas.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule,MatButtonModule,MatIconModule, MatSnackBarModule,MatInputModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CompartilharComponent } from './compartilhar/compartilhar.component';

@NgModule({
  declarations: [
    AppComponent,
    CompartilharComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LinhasModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatInputModule,
    RouterModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
