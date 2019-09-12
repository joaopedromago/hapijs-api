import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1568323217125 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "konoha"."ninja" ("id" SERIAL NOT NULL, "name" character varying(75) NOT NULL, "brief" character varying(255) NOT NULL, CONSTRAINT "PK_2ce829c83934cb5ec6407fcb26b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "konoha"."ninja"`);
    }

}
