import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PdcPais } from "./PdcPais";
import { PdcEmpresas } from "./PdcEmpresas";
import { PdcMunicipios } from "./PdcMunicipios";

@Index("departamentos_pais_FK", ["pdcPaiId"], {})
@Entity("pdc_departamentos", { schema: "pdcdb" })
export class PdcDepartamentos {
  @PrimaryGeneratedColumn({ type: "int", name: "pdc_dep_id" })
  pdcDepId: number;

  @Column("varchar", { name: "pdc_dep_departamento", length: 255 })
  pdcDepDepartamento: string;

  @Column("int", { name: "pdc_pai_id", nullable: true })
  pdcPaiId: number | null;

  @Column("int", { name: "pdc_dep_eliminado", default: () => 0, })
  pdcDepEliminado: number;

  @Column("datetime", { name: "pdc_dep_fecha_creado", default: () => "'CURRENT_TIMESTAMP(6)'", })
  pdcDepFechaCreado: Date;

  @ManyToOne(() => PdcPais, (pdcPais) => pdcPais.pdcDepartamentos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "pdc_pai_id", referencedColumnName: "pdcPaiId" }])
  pdcPai: PdcPais;

  @OneToMany(() => PdcEmpresas, (pdcEmpresas) => pdcEmpresas.pdcDep)
  pdcEmpresas: PdcEmpresas[];

  @OneToMany(() => PdcMunicipios, (pdcMunicipios) => pdcMunicipios.pdcDep)
  pdcMunicipios: PdcMunicipios[];
}
