import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class PgUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: number;
}