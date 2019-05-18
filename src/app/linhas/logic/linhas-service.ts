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
        linhaCentroEmpresarialParaCentroTecnologico.horarios = ["08:00", "08:15",
                                                                "08:45","09:05","09:30","09:50",
                                                                "09:55","10:45","10:50","11:20",
                                                                "11:35","12:20","12:25","12:30",
                                                                "13:15","13:50","14:05","14:30",
                                                                "14:55","15:10","15:20","15:45",
                                                                "16:35","16:50","17:35","18:00",
                                                                "18:15","18:25","19:20"];
        linhaCentroEmpresarialParaCentroTecnologico.atualizarHorarios();

        let linhaCentroTecnologicoParaCentroEmpresarial = new LinhaOnibus();
        linhaCentroTecnologicoParaCentroEmpresarial.id = "centroTecnologicoParaEmpresarial";
        linhaCentroTecnologicoParaCentroEmpresarial.origemLinha = "Centro Tecnológico";
        linhaCentroTecnologicoParaCentroEmpresarial.destinoLinha = "Centro Empresarial (CEIC)";
        linhaCentroTecnologicoParaCentroEmpresarial.imageUrl = "/assets/centro_tecnologico_itau.jpg"
        linhaCentroTecnologicoParaCentroEmpresarial.horarios = ["08:00", "08:15",
                                                                "08:40","09:00","09:05","09:55",
                                                                "10:00","10:30","10:45","11:30",
                                                                "11:35","11:40","12:25","13:00",
                                                                "13:15","13:40","14:05","14:20",
                                                                "14:30","14:55","15:45","16:00",
                                                                "16:35","17:00","17:10","17:20",
                                                                "17:25","18:35","18:50","19:20"];
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
