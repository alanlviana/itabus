import { LinhaOnibus } from './linha-onibus';
import { Observable, of } from 'rxjs';

export class CalculadorProximoHorario{

    constructor(){}

    obterHorariosNaOrdem(horarios:string[]): string[] {
        
        let horaAtual = new Date();
        let horaAtualFormatada = horaAtual.getHours().toString().padStart(2,"0") + ":" + horaAtual.getMinutes().toString().padStart(2, "0");
            
        let quantidadeTotalHorarios = horarios.length;
        let horariosParaHoje = horarios.filter(h => !this.horarioPassado(horaAtualFormatada, h));
        let quantidadeTotalHorariosHoje = horariosParaHoje.length;
    
        let horariosFaltantes = horarios.slice(0,quantidadeTotalHorarios - quantidadeTotalHorariosHoje);
        let horariosParaVisualizacao = horariosParaHoje;
            
        horariosFaltantes.forEach(h => horariosParaVisualizacao.push(h));
            
        horariosParaVisualizacao;
        
        return horariosParaVisualizacao; 
    }

    proximoHorario(horarios: string[]){
        let proximosHorarios = this.obterHorariosNaOrdem(horarios);
        return proximosHorarios[0];
    }

    private horarioPassado(horaAtual: string, horaAnalise:string){
        let horaAtualSemFormatacao = Number.parseInt(horaAtual.replace(":",""));
        let horaAnaliseSemFormatacao = Number.parseInt(horaAnalise.replace(":",""));

        return horaAtualSemFormatacao > horaAnaliseSemFormatacao;
    }

    obterHorasMinutosSegundosProximaPartida(horarios: string[]): any{
        
        var dataReferencia = new Date();
        let horaAtualFormatada = dataReferencia.getHours().toString().padStart(2, "0") + ":" + dataReferencia.getMinutes().toString().padStart(2, "0");
        
        let  horariosNaOrdem = this.obterHorariosNaOrdem(horarios)
        var proximoHorario = horariosNaOrdem[0];
        
        if (this.horarioPassado(horaAtualFormatada, proximoHorario)){
            // Adiciona um dia
            dataReferencia.setDate(dataReferencia.getDate() + 1);
        }
             // Hoje
        let today = new Date();
        let dataFormatada = dataReferencia.getFullYear()+"/"+(dataReferencia.getMonth()+1)+"/"+dataReferencia.getDate()+" " + proximoHorario;
        let endDate = new Date(dataFormatada);
        
        let hours = Math.floor(Math.abs(endDate.getTime() - today.getTime()) / (1000 * 60 * 60) % 24);
        let minutes = Math.floor(Math.abs(endDate.getTime() - today.getTime()) / (1000 * 60) % 60);
        const seconds = Math.floor(Math.abs(endDate.getTime() - today.getTime()) / (1000) % 60); 
        
        return {horas: hours, minutos: minutes, segundos: seconds};      
    };

    formatarTempo(horarios: string[]){
    
        let diferenca = this.obterHorasMinutosSegundosProximaPartida(horarios);

        let horarioFormatado = "";
        if (diferenca.horas > 0){
            horarioFormatado += diferenca.horas + "h ";
        }
        if (diferenca.minutos > 0 || diferenca.horas > 0){
            horarioFormatado += diferenca.minutos + "m ";
        }
        horarioFormatado += diferenca.segundos+"s";
    
        return horarioFormatado.trim();
    }
}