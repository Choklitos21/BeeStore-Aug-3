import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity("users")
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("varchar", { length: 250 })
    name: string;

    @Column("varchar", { length: 250 })
    email: string;

    @Column("varchar", { length: 50})
    userName: string;

    @Column("varchar", { length: 500 })
    password: string;
}
