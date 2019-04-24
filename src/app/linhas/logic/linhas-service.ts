import { Injectable } from '@angular/core';
import { LinhaOnibus } from './linha-onibus';


@Injectable()
export class LinhasService{

    getList(callback){
        let linhaCentroTecnologico = new LinhaOnibus();
        linhaCentroTecnologico.id = "centroTecnologico";
        linhaCentroTecnologico.origemLinha = "Centro Tecnológico";
        linhaCentroTecnologico.destinoLinha = "Metrô Brás";
        linhaCentroTecnologico.imageUrl = "/assets/centro_tecnologico_itau.jpg"
        linhaCentroTecnologico.horarios = ["00:05", "06:10",
                                           "08:10","13:10","14:10","15:10",
                                           "16:10","16:40","17:05","17:25",
                                           "17:35","17:50","18:05","18:15",
                                           "18:25","18:35","18:45","19:05",
                                           "19:15","19:25","19:45","20:10",
                                           "20:30","21:15","22:05","22:55"];
        linhaCentroTecnologico.atualizarHorarios();

        let linhaMetroBras = new LinhaOnibus();
        linhaMetroBras.id = "metroBras";
        linhaMetroBras.origemLinha = "Metrô Brás";
        linhaMetroBras.destinoLinha = "Centro Tecnológico";
        linhaMetroBras.imageUrl = "/assets/estacao_bras.jpg"
        linhaMetroBras.horarios = ["05:30","05:45","06:35","06:50",
                                   "07:15","07:30","07:40","07:50",
                                   "08:00","08:10","08:20","08:30",
                                   "08:40","08:50","09:00","09:10",
                                   "09:20","09:45","10:00","10:45","11:25",
                                   "11:45","12:20","12:40","12:50",
                                   "13:30","15:40","17:30","17:50",
                                   "18:20","18:40","21:45","23:50"];
        linhaMetroBras.atualizarHorarios();
        

        let listaLinha:LinhaOnibus[] = [linhaCentroTecnologico,linhaMetroBras];

        callback(listaLinha);
    }

    get(id: string, callback) {
        this.getList(response =>{
            let linha = response.filter(l => l.id == id)[0];
            callback(linha);
        })
    }

}