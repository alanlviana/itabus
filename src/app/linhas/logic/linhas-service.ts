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
                                   "09:20","09:30","09:45","10:00","10:45","11:25",
                                   "11:45","12:20","12:40","12:50",
                                   "13:30","15:40","17:30","17:50",
                                   "18:20","18:40","21:45","23:50"];
        linhaMetroBras.atualizarHorarios();

        let linhaCentroEmpresarialParaCentroTecnologico = new LinhaOnibus();
        linhaCentroEmpresarialParaCentroTecnologico.id = "centroEmpresarialParaTecnologico";
        linhaCentroEmpresarialParaCentroTecnologico.origemLinha = "Centro Empresarial (CEIC)";
        linhaCentroEmpresarialParaCentroTecnologico.destinoLinha = "Centro Tecnológico";
        linhaCentroEmpresarialParaCentroTecnologico.imageUrl = "/assets/centro_empresarial_itau.jpg"
        linhaCentroEmpresarialParaCentroTecnologico.horarios = [
            "08:00", "08:15","08:45","08:55",
            "09:15", "09:35","09:55",
            "10:15", "10:35","10:55",
            "11:20", "11:35","11:50",
            "12:15", "12:30","12:55",
            "13:10", "13:35","13:55",
            "14:15", "14:30","14:55",
            "15:10", "15:35","15:45",
            "16:15", "16:30","16:55",
            "17:15", "17:50",
            "18:00", "18:30",
            "19:20"
        ];
    
        linhaCentroEmpresarialParaCentroTecnologico.atualizarHorarios();

        let linhaCentroTecnologicoParaCentroEmpresarial = new LinhaOnibus();
        linhaCentroTecnologicoParaCentroEmpresarial.id = "centroTecnologicoParaEmpresarial";
        linhaCentroTecnologicoParaCentroEmpresarial.origemLinha = "Centro Tecnológico";
        linhaCentroTecnologicoParaCentroEmpresarial.destinoLinha = "Centro Empresarial (CEIC)";
        linhaCentroTecnologicoParaCentroEmpresarial.imageUrl = "/assets/centro_tecnologico_itau.jpg"
        linhaCentroTecnologicoParaCentroEmpresarial.horarios = [
            "08:00", "08:15","08:30","08:55",
            "09:10", "09:35","09:50",
            "10:15", "10:35","10:55",
            "11:05", "11:35","11:45",
            "12:15", "12:25","12:55",
            "13:10", "13:35","13:40",
            "14:15", "14:20","14:55",
            "15:00", "15:35","15:45",
            "16:15", "16:30","16:55",
            "17:15", "17:35",
            "18:00", "18:30","18:40",
            "19:10", "19:20"
        ];
        linhaCentroTecnologicoParaCentroEmpresarial.atualizarHorarios();
        
        let listaLinha:LinhaOnibus[] = [
            linhaCentroTecnologico,
            linhaMetroBras,
            linhaCentroEmpresarialParaCentroTecnologico,
            linhaCentroTecnologicoParaCentroEmpresarial
        ];

        callback(listaLinha);
    }

    get(id: string, callback) {
        this.getList(response =>{
            let linha = response.filter(l => l.id == id)[0];
            callback(linha);
        })
    }

}
