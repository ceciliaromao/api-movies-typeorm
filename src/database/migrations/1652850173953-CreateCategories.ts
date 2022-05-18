import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1652850173953 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "categories",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            isUnique: true,
          } /* ,
            {
              name: "is_subcategory_of",
              type: "numeric",
            } */,
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        /* foreignKeys: [
            {
              name: "fk_subcategory_of",
              columnNames: ["is_subcategory_of"],
              referencedTableName: "categories",
              referencedColumnNames: ["id"],
            },
          ], */
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("categories");
  }
}
