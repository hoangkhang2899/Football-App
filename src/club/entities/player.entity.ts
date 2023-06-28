import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
