import { Injectable } from '@angular/core';
import { LinhaOnibus } from './linha-onibus';
import { Linhas } from './linhas';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class LinhasService{

    getList(): Observable<LinhaOnibus[]> {
        let listaLinha:LinhaOnibus[] = Linhas;
    
        return of(listaLinha);
    }

    get(id: string): Observable<LinhaOnibus> {
        let listaLinha:LinhaOnibus[] = Linhas;
        let linha = listaLinha.filter(l => l.id == id)[0];

        return of(linha);
    }

}
