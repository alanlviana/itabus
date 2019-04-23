import { CalculadorProximoHorario } from './calculador-proximo-horario';

export class LinhaOnibus{


    constructor(){
        setInterval(()=>{
            this.atualizarHorarios();
        },1000);
    }

    atualizarHorarios(){
        let calculadora = new CalculadorProximoHorario(this.horarios);
        calculadora.obterHorasMinutosSegundosProximaPartida().then(value => {
            let diferenca = <any>value;
            let horarioFormatado = "";
            if (diferenca.horas > 0){
                horarioFormatado += diferenca.horas + "h ";
            }

            if (diferenca.minutos > 0 || diferenca.horas > 0){
                horarioFormatado += diferenca.minutos + "m ";
            }

            horarioFormatado += diferenca.segundos+"s";

            this.proximoHorario = horarioFormatado.trim();
        });
        calculadora.obterHorariosNaOrdem().then(value => {
            this.horariosFuturos = <string[]>value;
        });
        

    }

    id: string;
    origemLinha: string;
    destinoLinha: string;
    imageUrl: string;
    horarios: string[];
    proximoHorario: string;
    horariosFuturos: string[];

    
}