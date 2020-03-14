import { LinhaOnibus } from './linha-onibus';


export const Linhas: LinhaOnibus[] = [
    new LinhaOnibus({
        id: "centroTecnologico",
        origemLinha: "Centro Tecnológico",
        imageUrl: "/assets/centro_tecnologico_itau.jpg",
        destinos:[
            {
                nome: "Metrô Brás",
                horarios: [
                    "00:05", "06:10",
                    "08:10","13:10","14:10","15:10",
                    "16:10","16:40","17:05","17:25",
                    "17:35","17:50","18:05","18:15",
                    "18:25","18:35","18:45","19:05",
                    "19:15","19:25","19:45","20:10",
                    "20:30","21:15","22:05","22:55"
                ]
            },
            {
                nome: "Centro Empresarial (CEIC)",
                horarios: [
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
                ]
            },
            {
                nome: "CA Tatuapé",
                horarios: [
                    "08:00", "08:40",
                    "09:25",
                    "10:10", "10:35",
                    "11:15",
                    "12:00", "12:40",
                    "13:10", "13:50",
                    "14:35",
                    "15:15", "15:50",
                    "16:25",
                    "17:20",
                    "18:20", "18:40"
                ]
            }]
        
    }),

    new LinhaOnibus({
        id:"metroBras",
        origemLinha: "Metrô Brás",
        imageUrl: "/assets/estacao_bras.jpg",
        destinos:[
            {
                nome: "Centro Tecnológico",
                horarios: [
                    "05:30","05:45","06:35","06:50",
                    "07:15","07:30","07:40","07:50",
                    "08:00","08:10","08:20","08:30",
                    "08:40","08:50","09:00","09:10",
                    "09:20","09:30","09:45","10:00","10:45","11:25",
                    "11:45","12:20","12:40","12:50",
                    "13:30","15:40","17:30","17:50",
                    "18:20","18:40","21:45","23:50"
                ]
            }]
        
    }),

    new LinhaOnibus({
        id: "centroEmpresarial",
        origemLinha: "Centro Empresarial (CEIC)",
        imageUrl: "/assets/centro_empresarial_itau.jpg",
        destinos:[
            {
                nome: "Centro Tecnológico",
                horarios: [
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
                ]
            },
            {
                nome: "Faria Lima",
                horarios: [
                    "08:00", "08:50",
                    "09:40",
                    "10:30",
                    "11:10",
                    "12:10",
                    "13:50",
                    "15:30",
                    "16:10",
                    "17:30",
                    "18:15"
                ]
            }]
    }),
    
    new LinhaOnibus({
        id: "farialima",
        origemLinha: "Faria Lima",
        imageUrl: "/assets/itau_faria_lima.jpg",
        destinos:[
        {
            nome: "Centro Empresarial (CEIC)",
            horarios: [
                "08:00", "08:50",
                "09:40",
                "10:20",
                "11:20",
                "13:00",
                "14:40",
                "15:20",
                "16:20",
                "17:00",
                "18:30"
            ]
        }]
    }),

    new LinhaOnibus({
        id: "itautatuape",
        origemLinha: "CA Tatuapé",
        imageUrl: "/assets/itau_tatuape.jpg",
        destinos:[
            {
                nome: "CT + CEIC",
                horarios: [
                    "08:00", "08:40",
                    "09:20",
                    "10:05", "10:50",
                    "11:15", "11:55",
                    "12:40",
                    "13:15", "13:50",
                    "14:30",
                    "15:15",
                    "16:00", "16:30",
                    "17:05",
                    "18:00"
                ]
            },
            {
                nome: "CT",
                horarios: [
                    "19:10", "19:30"
                ]
            }]
    })
];