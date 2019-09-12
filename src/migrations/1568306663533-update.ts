import { MigrationInterface, QueryRunner } from 'typeorm'

export class update1568306663533 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "konoha"."ninja" alter column nome type character varying(60)`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "konoha"."ninja" alter column nome type character varying(50)`
    )
  }
}
