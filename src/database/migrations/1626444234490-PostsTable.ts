import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class PostsTable1626444234490 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: 'posts',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'title',
                        type: 'varchar'
                    },
                    {
                        name: 'content',
                        type: 'varchar'
                    },
                    {
                        name: 'id_user',
                        type: 'uuid'
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    {
                        name: 'FKUser',
                        referencedTableName: 'user',
                        referencedColumnNames: ['id'],
                        columnNames: ['id_user'],
                        onDelete: 'CASCADE',
                        onUpdate: 'CASCADE'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('posts')
    }

}
