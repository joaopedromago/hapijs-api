import {MigrationInterface, QueryRunner} from "typeorm";

export class InitDb1568306485956 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "konoha"."ninja" ("id" SERIAL NOT NULL, "nome" character varying(50) NOT NULL, "aldeia" character varying(80) NOT NULL, CONSTRAINT "PK_2ce829c83934cb5ec6407fcb26b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "konoha"."ninja"`);
    }

}
