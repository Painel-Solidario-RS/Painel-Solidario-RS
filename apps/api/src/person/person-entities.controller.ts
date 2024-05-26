import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ValidationPipe } from 'src/common/validation.pipe';
import {
  CreatePersonActivityDTO,
  CreatePersonEmploymentDTO,
  CreatePersonShiftsDTO,
  CreateVolunteerCategoryDTO,
} from './dtos/create-person.dto';
import {
  FindPersonActivityDto,
  FindPersonEmploymentDto,
  FindPersonShiftsDto,
  FindVolunteerCategoryDto,
} from './dtos/find-person.dto';
import {
  UpdatePersonActivityDTO,
  UpdatePersonEmploymentDTO,
  UpdatePersonShiftsDTO,
  UpdateVolunteerCategoryDTO,
} from './dtos/update-person.dto';
import {
  PersonActivity,
  PersonEmployment,
  PersonShifts,
  VolunteerCategory,
} from './entities/person.entity';
import { PersonActivityService } from './services/person-activity.service';
import { PersonEmploymentService } from './services/person-employment.service';
import { PersonShiftsService } from './services/person-shifts.service';
import { VolunteerCategoryService } from './services/volunteer-category.service';

@Controller()
export class PersonEntitiesController {
  constructor(
    private readonly personShiftsService: PersonShiftsService,
    private readonly personActivityService: PersonActivityService,
    private readonly personEmploymentService: PersonEmploymentService,
    private readonly volunteerCategoryService: VolunteerCategoryService,
  ) {}

  // ----------------- Person Shifts ----------------- //

  @Get('/person-shifts')
  public findPersonShifts(
    @Query(new ValidationPipe()) filter: FindPersonShiftsDto,
  ): Promise<PersonShifts[]> {
    return this.personShiftsService.findPersonShiftsByFilter(filter);
  }

  @Post('/person-shifts')
  public async createPersonShifts(
    @Body(new ValidationPipe()) args: CreatePersonShiftsDTO,
  ): Promise<{ id: number }> {
    const id = await this.personShiftsService.createPersonShifts(args);

    return { id };
  }

  @Patch('/person-shifts/:id')
  public updatePersonShiftsById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body(new ValidationPipe()) args: UpdatePersonShiftsDTO,
  ): Promise<PersonShifts> {
    return this.personShiftsService.updatePersonShifts(id, args);
  }

  @Delete('/person-shifts/:id')
  public deletePersonShiftsById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<void> {
    return this.personShiftsService.deletePersonShiftsById(id);
  }

  // ----------------- Person Employment ----------------- //

  @Get('/person-employment')
  public findPersonEmployment(
    @Query(new ValidationPipe()) filter: FindPersonEmploymentDto,
  ): Promise<PersonEmployment[]> {
    return this.personEmploymentService.findPersonEmploymentByFilter(filter);
  }

  @Post('/person-employment')
  public async createPersonEmployment(
    @Body(new ValidationPipe()) args: CreatePersonEmploymentDTO,
  ): Promise<{ id: number }> {
    const id = await this.personEmploymentService.createPersonEmployment(args);

    return { id };
  }

  @Patch('/person-employment/:id')
  public updatePersonEmploymentById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body(new ValidationPipe()) args: UpdatePersonEmploymentDTO,
  ): Promise<PersonEmployment> {
    return this.personEmploymentService.updatePersonEmployment(id, args);
  }

  @Delete('/person-employment/:id')
  public deletePersonEmploymentById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<void> {
    return this.personEmploymentService.deletePersonEmploymentById(id);
  }

  // ----------------- Person Activity ----------------- //

  @Get('/person-activity')
  public findPersonActivity(
    @Query(new ValidationPipe()) filter: FindPersonActivityDto,
  ): Promise<PersonActivity[]> {
    return this.personActivityService.findPersonActivityByFilter(filter);
  }

  @Post('/person-activity')
  public async createPersonActivity(
    @Body(new ValidationPipe()) args: CreatePersonActivityDTO,
  ): Promise<{ id: number }> {
    const id = await this.personActivityService.createPersonActivity(args);

    return { id };
  }

  @Patch('/person-activity/:id')
  public updatePersonActivityById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body(new ValidationPipe()) args: UpdatePersonActivityDTO,
  ): Promise<PersonActivity> {
    return this.personActivityService.updatePersonActivity(id, args);
  }

  @Delete('/person-activity/:id')
  public deletePersonActivityById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<void> {
    return this.personActivityService.deletePersonActivityById(id);
  }

  // ----------------- Volunteer Category ----------------- //

  @Get('/volunteer-category')
  public findVolunteerCategory(
    @Query(new ValidationPipe()) filter: FindVolunteerCategoryDto,
  ): Promise<VolunteerCategory[]> {
    return this.volunteerCategoryService.findVolunteerCategoryByFilter(filter);
  }

  @Post('/volunteer-category')
  public async createVolunteerCategory(
    @Body(new ValidationPipe()) args: CreateVolunteerCategoryDTO,
  ): Promise<{ id: number }> {
    const id =
      await this.volunteerCategoryService.createVolunteerCategory(args);

    return { id };
  }

  @Patch('/volunteer-category/:id')
  public updateVolunteerCategoryById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body(new ValidationPipe()) args: UpdateVolunteerCategoryDTO,
  ): Promise<VolunteerCategory> {
    return this.volunteerCategoryService.updateVolunteerCategory(id, args);
  }

  @Delete('/volunteer-category/:id')
  public deleteVolunteerCategoryById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<void> {
    return this.volunteerCategoryService.deleteVolunteerCategoryById(id);
  }

  // ----------------- End ----------------- //
}
