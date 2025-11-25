import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PdcDepartamentos } from "./PdcDepartamentos";
import { PdcEmpresas } from "./PdcEmpresas";

@Entity("pdc_pais", { schema: "pdcdb" })
export class PdcPais {
  @PrimaryGeneratedColumn({ type: "int", name: "pdc_pai_id" })
  pdcPaiId: number;

  @Column("varchar", { name: "pdc_pai_pais", length: 50 })
  pdcPaiPais: string;

  @Column("varchar", { name: "pdc_pai_siglas", length: 20 })
  pdcPaiSiglas: string;

  @Column("int", { name: "pdc_pai_eliminado", default: () => 0, })
  pdcPaiEliminado: number;

  @Column("datetime", {
    name: "pdc_pai_fecha_creado",
    default: () => "'CURRENT_TIMESTAMP(6)'",
  })
  pdcPaiFechaCreado: Date;

  @OneToMany(
    () => PdcDepartamentos,
    (pdcDepartamentos) => pdcDepartamentos.pdcPai
  )
  pdcDepartamentos: PdcDepartamentos[];

  @OneToMany(() => PdcEmpresas, (pdcEmpresas) => pdcEmpresas.pdcPai)
  pdcEmpresas: PdcEmpresas[];
}
