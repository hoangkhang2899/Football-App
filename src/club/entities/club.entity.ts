import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('club')
export class Club {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	title: string;
	@Column()
	coach: string;
}
