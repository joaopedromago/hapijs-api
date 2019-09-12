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
    name: 'name',
    length: 75,
  })
  name: string

  @Column('varchar', {
    nullable: false,
    name: 'brief',
    length: 255,
  })
  brief: string

  public mount(payload) {
    this.name = payload.name
    this.brief = payload.brief
  }
}
