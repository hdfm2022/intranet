import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCompliments1629168847905 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliments",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "user_sender",
                        type: "uui",
                    },
                    {
                        name: "user_receiver",
                        type: "uui",
                    },
                    {
                        name: "compliment_type_id",
                        type: "uui",
                    },
                    {
                        name: "message",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FK_UserSender_Compliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_sender"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FK_UserReceiver_Compliments",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_receiver"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name: "FK_Type_Compliments",
                        referencedTableName: "compliment_types",
                        referencedColumnNames: ["id"],
                        columnNames: ["compliment_type_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ]
            })
        )

        // await queryRunner.createForeignKey("compliments", new TableForeignKey({
        //     name: "FK_UserSender_Compliments",
        //     referencedTableName: "users",
        //     referencedColumnNames: ["id"],
        //     columnNames: ["user_sender"],
        //     onDelete: "SET NULL",
        //     onUpdate: "SET NULL",
        // }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments");
    }

}
