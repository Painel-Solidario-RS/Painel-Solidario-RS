import { IsEmail, IsString } from 'class-validator';

export class LoginDTO {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
