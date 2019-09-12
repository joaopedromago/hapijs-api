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
    length: 50,
  })
  nome: string
}
