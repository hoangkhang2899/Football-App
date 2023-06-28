import { Module } from '@nestjs/common';
import { ClubService } from './club.service';
import { ClubController } from './club.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Club } from './entities/club.entity';
import { Player } from './entities/player.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Club, Player])],
	controllers: [ClubController],
	providers: [ClubService],
})
export class ClubModule {}
