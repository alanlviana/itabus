import { CalculadorProximoHorario } from './calculador-proximo-horario';

export class LinhaOnibus{

    public constructor(init?:Partial<LinhaOnibus>) {
        Object.assign(this, init);
    }

    id: string;
    origemLinha: string;
    destinoLinha: string;
    imageUrl: string;
    horarios: string[];

    
}