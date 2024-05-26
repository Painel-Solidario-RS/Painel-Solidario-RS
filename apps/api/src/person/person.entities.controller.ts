import { Controller, Get, Query } from '@nestjs/common';
import { ValidationPipe } from 'src/common/validation.pipe';
import {
  FindPersonActivityDto,
  FindPersonEmploymentDto,
  FindPersonShiftsDto,
  FindVolunteerCategoryDto,
} from './dtos/find-person.dto';
import {
  PersonActivity,
  PersonEmployment,
  PersonShifts,
  VolunteerCategory,
} from './entities/person.entity';
import { PersonService } from './person.service';

@Controller()
export class PersonEntitiesController {
  constructor(private readonly personService: PersonService) {}

  @Get('/volunteer-category')
  public findVolunteerCategory(
    @Query(new ValidationPipe()) filter: FindVolunteerCategoryDto,
  ): Promise<VolunteerCategory[]> {
    return this.personService.findVolunteerCategory(filter);
  }

  @Get('/person-employment')
  public findPersonEmployment(
    @Query(new ValidationPipe()) filter: FindPersonEmploymentDto,
  ): Promise<PersonEmployment[]> {
    return this.personService.findPersonEmployment(filter);
  }

  @Get('/person-activity')
  public findPersonActivity(
    @Query(new ValidationPipe()) filter: FindPersonActivityDto,
  ): Promise<PersonActivity[]> {
    return this.personService.findPersonActivity(filter);
  }

  @Get('/person-shifts')
  public findPersonShifts(
    @Query(new ValidationPipe()) filter: FindPersonShiftsDto,
  ): Promise<PersonShifts[]> {
    return this.personService.findPersonShifts(filter);
  }
}
