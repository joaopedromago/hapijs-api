import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('ninja', { schema: 'konoha' })
export class Ninja extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id',
    unsigned: true,
  })
  id: number

  @Column('varchar', {
    nullable: false,
    name: 'nome',
    length: 60,
  })
  nome: string

  @Column('varchar', {
    nullable: false,
    name: 'aldeia',
    length: 80,
  })
  aldeia: string

  public mount(payload) {
    this.nome = payload.nome
    this.aldeia = payload.aldeia
  }
}
