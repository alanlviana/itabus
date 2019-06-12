import { DestinoOnibus } from './destino-onibus';

export class LinhaOnibus{

    public constructor(init?:Partial<LinhaOnibus>) {
        Object.assign(this, init);
    }

    id: string;
    origemLinha: string;
    imageUrl: string;
    destinos: DestinoOnibus[];

}