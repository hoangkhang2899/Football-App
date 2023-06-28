import { Module } from '@nestjs/common';
import { SeasonModule } from './season/season.module';
import { ClubModule } from './club/club.module';
import { StandingsModule } from './standings/standings.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: process.env.DB_HOST,
			port: +process.env.DB_PORT,
			username: process.env.DB_USER,
			password: process.env.DB_PASS,
			database: process.env.DB_NAME,
			autoLoadEntities: true,
			// IMPORTANT: Disable in production
			synchronize: true,
		}),
		SeasonModule,
		ClubModule,
		StandingsModule,
	],
})
export class AppModule {}
