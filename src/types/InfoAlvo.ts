import type{ PointTuple } from "leaflet"
export interface Info{
    codigo: string,
    nivelAmeaca: 'ALTA'|'MÉDIA'|'BAIXA',
    codinome: string,
    nomeReal: string,
    localizacao: string,
    coordenadas: PointTuple,
    status: 'TODOS'|'NA MIRA'| 'ELIMINADO' | 'AMOSTRA COLETADA',
    img: string,
    crime: string,
    descricaoCrime: string,
    ultimaAparicao:string,
}