import { BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity('posts')
class Post {
    
    @PrimaryColumn()
    id: string;

    @Column()
    @BeforeUpdate()
    title: string;

    @Column()
    @BeforeUpdate()
    content: string;

    @Column()
    user_id: string;

    @JoinColumn({ name: 'user_id' })
    @ManyToOne(() => User)
    userId: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id)
            this.id = uuid()
    }

}

export { Post }