export class DestinoOnibus{

    public constructor(init?:Partial<DestinoOnibus>) {
        Object.assign(this, init);
    }

    nome: string;
    horarios: string[];

    
}