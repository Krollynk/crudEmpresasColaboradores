import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PdcColaboradores } from "./PdcColaboradores";
import { PdcDepartamentos } from "./PdcDepartamentos";
import { PdcMunicipios } from "./PdcMunicipios";
import { PdcPais } from "./PdcPais";

@Index("empresa_departamento_FK", ["pdcDepId"], {})
@Index("empresa_municipio_FK", ["pdcMunId"], {})
@Index("empresa_pais_FK", ["pdcPaiId"], {})
@Entity("pdc_empresas", { schema: "pdcdb" })
export class PdcEmpresas {
  @PrimaryGeneratedColumn({ type: "int", name: "pdc_emp_id" })
  pdcEmpId: number;

  @Column("varchar", { name: "pdc_emp_nombre_comercial", length: 100 })
  pdcEmpNombreComercial: string;

  @Column("varchar", { name: "pdc_emp_razon_social", length: 100 })
  pdcEmpRazonSocial: string;

  @Column("varchar", { name: "pdc_emp_nit", nullable: true, length: 40 })
  pdcEmpNit: string | null;

  @Column("varchar", { name: "pdc_emp_telefono", nullable: true, length: 40 })
  pdcEmpTelefono: string | null;

  @Column("varchar", { name: "pdc_emp_correo", nullable: true, length: 50 })
  pdcEmpCorreo: string | null;

  @Column("int", { name: "pdc_pai_id", nullable: true })
  pdcPaiId: number | null;

  @Column("int", { name: "pdc_dep_id", nullable: true })
  pdcDepId: number | null;

  @Column("int", { name: "pdc_mun_id", nullable: true })
  pdcMunId: number | null;

  @Column("int", { name: "pdc_emp_eliminado", default: () => 0, })
  pdcEmpEliminado: number;

  @Column("datetime", { name: "pdc_emp_fecha_creado", default: () => "'CURRENT_TIMESTAMP(6)'", })
  pdcEmpFechaCreado: Date;

  @ManyToMany(
    () => PdcColaboradores,
    (pdcColaboradores) => pdcColaboradores.pdcEmpresas
  )
  pdcColaboradores: PdcColaboradores[];

  @ManyToOne(
    () => PdcDepartamentos,
    (pdcDepartamentos) => pdcDepartamentos.pdcEmpresas,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "pdc_dep_id", referencedColumnName: "pdcDepId" }])
  pdcDep: PdcDepartamentos;

  @ManyToOne(
    () => PdcMunicipios,
    (pdcMunicipios) => pdcMunicipios.pdcEmpresas,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "pdc_mun_id", referencedColumnName: "pdcMunId" }])
  pdcMun: PdcMunicipios;

  @ManyToOne(() => PdcPais, (pdcPais) => pdcPais.pdcEmpresas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "pdc_pai_id", referencedColumnName: "pdcPaiId" }])
  pdcPai: PdcPais;
}
