import { LinhaOnibus } from './linha-onibus';

export class CalculadorProximoHorario{

    constructor(private horarios:string[]){}

    obterHorariosNaOrdem(){
        return new Promise(resolve =>{
            let horaAtual = new Date();
            let horaAtualFormatada = horaAtual.getHours().toString().padStart(2,"0") + ":" + horaAtual.getMinutes().toString().padStart(2, "0");
            
            let quantidadeTotalHorarios = this.horarios.length;
            let horariosParaHoje = this.horarios.filter(h => !this.horarioPassado(horaAtualFormatada, h));
            let quantidadeTotalHorariosHoje = horariosParaHoje.length;
    
            let horariosFaltantes = this.horarios.slice(0,quantidadeTotalHorarios - quantidadeTotalHorariosHoje);
    
            let horariosParaVisualizacao = horariosParaHoje;
            
            horariosFaltantes.forEach(h => horariosParaVisualizacao.push(h));
            
            resolve(horariosParaVisualizacao);
        });
        
        
        
    }

    private horarioPassado(horaAtual: string, horaAnalise:string){
        let horaAtualSemFormatacao = Number.parseInt(horaAtual.replace(":",""));
        let horaAnaliseSemFormatacao = Number.parseInt(horaAnalise.replace(":",""));

        return horaAtualSemFormatacao > horaAnaliseSemFormatacao;
    }

    obterHorasMinutosSegundosProximaPartida(){
        return new Promise(resolve => {
            var dataReferencia = new Date();
            let horaAtualFormatada = dataReferencia.getHours().toString().padStart(2, "0") + ":" + dataReferencia.getMinutes().toString().padStart(2, "0");
            
            this.obterHorariosNaOrdem().then(horariosNaOrdem => {
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
        
                resolve({horas: hours, minutos: minutes, segundos: seconds});
    
            })

        })   
        
        
        
    }
}