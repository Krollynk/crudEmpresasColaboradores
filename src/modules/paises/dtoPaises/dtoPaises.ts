export interface DtoPaisesGet {
    pdcPaiId: number,
    pdcPaiPais: string,
    pdcPaiSiglas: string,
    pdcPaiFechaCreado: Date,
}
export interface DtoPaisesInsert{
    pdcPaiPais: string,
    pdcPaiSiglas: string,
}