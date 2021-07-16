import { BeforeUpdate, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity('posts')
class Posts {
    
    @PrimaryColumn()
    id: string;

    @Column()
    @BeforeUpdate()
    title: string;

    @Column()
    @BeforeUpdate()
    content: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id)
            this.id = uuid()
    }
}
export { Posts }