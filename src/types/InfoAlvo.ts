import type{ PointTuple } from "leaflet"
export interface Info{
    codigo: string,
    nivelAmeaca: 'ALTA'|'MÉDIA'|'BAIXA',
    codinome: string,
    nomeReal: string,
    localizacao: string,
    coordenadas: PointTuple,
    img: string
}