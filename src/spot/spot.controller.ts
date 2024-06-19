import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpotService } from './spot.service';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';

@Controller('events/:eventId/spots')
export class SpotController {
  constructor(private readonly spotService: SpotService) {}

  @Post()
  create(
    @Body() createSpotDto: CreateSpotDto,
    @Param('eventId') eventId: string,
  ) {
    return this.spotService.create({
      ...createSpotDto,
      eventId
    });
  }

  @Get()
  findAll( @Param('eventId') eventId: string ) {
    return this.spotService.findAll( eventId );
  }

  @Get(':spotId')
  findOne(@Param('id') spotId: string, @Param('eventId') eventId: string) {
    return this.spotService.findOne(eventId, spotId);
  }

  @Patch(':spotId')
  update(
    @Param('spotId') spotId: string,
    @Param('eventId') eventId: string ,
    @Body() updateSpotDto: UpdateSpotDto) {
    return this.spotService.update(eventId, spotId, updateSpotDto);
  }

  @Delete(':spotId')
  remove(@Param('spotId') spotId: string, @Param('eventId') eventId: string) {
    return this.spotService.remove(eventId, spotId);
  }
}
