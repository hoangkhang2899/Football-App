import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Player } from './player.entity';

@Entity('club')
export class Club {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	title: string;
	@Column()
	coach: string;

	@OneToMany(() => Player, (data) => data.club, {
		cascade: true,
		eager: true,
	})
	players: Player[];
}
