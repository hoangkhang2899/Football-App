import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Club } from './club.entity';

@Entity('player')
export class Player {
	@PrimaryGeneratedColumn()
	id: number;
	@Column()
	clubId: number;
	@Column()
	playerName: string;
	@Column({ type: 'smallint' })
	playerNumber: number;

	@ManyToOne(() => Club, (data) => data.players, {
		onDelete: 'CASCADE',
		orphanedRowAction: 'delete',
	})
	club: Club;
}
