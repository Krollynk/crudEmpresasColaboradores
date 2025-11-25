import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { PdcEmpresas } from "./PdcEmpresas";

@Entity("pdc_colaboradores", { schema: "pdcdb" })
export class PdcColaboradores {
  @PrimaryGeneratedColumn({ type: "int", name: "pdc_col_id" })
  pdcColId: number;

  @Column("varchar", { name: "pdc_col_nombre", length: 255 })
  pdcColNombre: string;

  @Column("varchar", { name: "pdc_col_apellido", length: 255 })
  pdcColApellido: string;

  @Column("varchar", { name: "pdc_col_edad", nullable: true, length: 10 })
  pdcColEdad: string | null;

  @Column("varchar", { name: "pdc_col_telefono", nullable: true, length: 40 })
  pdcColTelefono: string | null;

  @Column("varchar", { name: "pdc_col_correo", nullable: true, length: 50 })
  pdcColCorreo: string | null;

  @Column("int", { name: "pdc_col_eliminado", default: () => 0, })
  pdcColEliminado: number;

  @Column("datetime", { name: "pdc_col_fecha_creado", default: () => "'CURRENT_TIMESTAMP(6)'", })
  pdcColFechaCreado: Date;

  @ManyToMany(() => PdcEmpresas, (pdcEmpresas) => pdcEmpresas.pdcColaboradores)
  @JoinTable({
    name: "empresa_colaborador",
    joinColumns: [{ name: "pdc_col_id", referencedColumnName: "pdcColId" }],
    inverseJoinColumns: [
      { name: "pdc_emp_id", referencedColumnName: "pdcEmpId" },
    ],
    schema: "pdcdb",
  })
  pdcEmpresas: PdcEmpresas[];
}
