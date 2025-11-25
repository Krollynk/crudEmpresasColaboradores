import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PdcEmpresas } from "./PdcEmpresas";
import { PdcDepartamentos } from "./PdcDepartamentos";

@Index("municipio_departamento_FK", ["pdcDepId"], {})
@Entity("pdc_municipios", { schema: "pdcdb" })
export class PdcMunicipios {
  @PrimaryGeneratedColumn({ type: "int", name: "pdc_mun_id" })
  pdcMunId: number;

  @Column("varchar", { name: "pdc_mun_municipio", length: 255 })
  pdcMunMunicipio: string;

  @Column("int", { name: "pdc_dep_id", nullable: true })
  pdcDepId: number | null;

  @Column("int", { name: "pdc_dep_eliminado", default: () => 0, })
  pdcDepEliminado: number;

  @Column("datetime", { name: "pdc_dep_fecha_creado", default: () => "'CURRENT_TIMESTAMP(6)'", })
  pdcDepFechaCreado: Date;

  @OneToMany(() => PdcEmpresas, (pdcEmpresas) => pdcEmpresas.pdcMun)
  pdcEmpresas: PdcEmpresas[];

  @ManyToOne(
    () => PdcDepartamentos,
    (pdcDepartamentos) => pdcDepartamentos.pdcMunicipios,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "pdc_dep_id", referencedColumnName: "pdcDepId" }])
  pdcDep: PdcDepartamentos;
}
