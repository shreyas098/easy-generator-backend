import {
  Controller,
  Post,
  Body,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { UserService } from './user.service';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';

@Controller('auth')
export class UserController {
  private readonly logger = new Logger(UserController.name); // Initialize the logger

  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto) {
    this.logger.log('Sign-up request received');
    try {
      return await this.userService.signUp(
        signUpDto.email,
        signUpDto.name,
        signUpDto.password,
      );
    } catch (error) {
      this.logger.error('Sign-up error', error);
      throw new BadRequestException(error.message);
    }
  }

  @Post('signin')
  async signIn(@Body() signInDto: SignInDto) {
    this.logger.log('Sign-in request received');
    try {
      return await this.userService.signIn(signInDto.email, signInDto.password);
    } catch (error) {
      this.logger.error('Sign-in error', error);
      throw new BadRequestException(error.message);
    }
  }
}
