import {IsString, IsOptional, Min, IsNumber} from "class-validator";

export class DtoEmpresasInput {
    @IsString()
    @Min(2)
    pdcEmpNombreComercial: string;

    @IsString()
    @Min(2)
    pdcEmpRazonSocial: string;

    @IsString()
    @IsOptional()
    @Min(2)
    pdcEmpNit?: string;

    @IsString()
    @IsOptional()
    @Min(2)
    pdcEmpTelefono?: string;

    @IsString()
    @IsOptional()
    @Min(2)
    pdcEmpCorreo?: string;

    @IsNumber()
    @Min(2)
    pdcPaiId: number;

    @IsNumber()
    @Min(2)
    pdcDepId: number;

    @IsNumber()
    @Min(2)
    pdcMunId: number;
}