import { LargeNumberLike } from "crypto";
import { ClientRequest } from "http";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    phNo: number

    @Column()
    password: string

    @Column()
    role: string;

}
