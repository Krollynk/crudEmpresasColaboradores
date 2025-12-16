import {IsString, IsOptional, Min, IsNumber, Length} from "class-validator";
import {Expose} from "class-transformer";

export class DtoEmpresasInput {
    @Expose()
    @IsString()
    @Length(2)
    pdcEmpNombreComercial: string;

    @Expose()
    @IsString()
    @Length(2)
    pdcEmpRazonSocial: string;

    @Expose()
    @IsString()
    @IsOptional()
    @Length(2)
    pdcEmpNit?: string;

    @Expose()
    @IsString()
    @IsOptional()
    @Length(2)
    pdcEmpTelefono?: string;

    @Expose()
    @IsString()
    @IsOptional()
    @Length(2)
    pdcEmpCorreo?: string;

    @Expose()
    @IsNumber()
    @Min(1)
    pdcPaiId: number;

    @Expose()
    @IsNumber()
    @Min(1)
    pdcDepId: number;

    @Expose()
    @IsNumber()
    @Min(1)
    pdcMunId: number;
}