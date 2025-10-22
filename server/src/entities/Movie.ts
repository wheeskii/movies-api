import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Genre } from "./Genre";


@Entity() 
export class Movie {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    dateReleased!: string;

    @Column()
    runtime!: string;

    @Column("text")
    plot!: string;

    @Column()
    language!: string;

    @Column()
    poster!: string;
    
    @Column({ default: false })
    isWatched!: boolean;
    
    @ManyToMany(() => Genre, (genre) => genre.movies, {
        cascade: true,
    })

    @JoinTable()
    genres!: Genre[];
}