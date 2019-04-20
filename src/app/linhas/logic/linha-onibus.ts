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
            this.proximoHorario = diferenca.horas + "h "+diferenca.minutos+"m "+diferenca.segundos+"s";
            console.log(this.proximoHorario);
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