import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name); // Initialize the logger

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async signUp(email: string, name: string, password: string): Promise<any> {
    this.logger.log('Processing sign-up for: ' + email);
    const existingUser = await this.userModel.findOne({ email });

    if (existingUser) {
      this.logger.error('User with this email already exists');
      throw new BadRequestException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new this.userModel({
      email,
      name,
      password: hashedPassword,
    });

    await user.save();
    this.logger.log('User successfully registered: ' + email);
    return {
      message: 'User successfully registered',
    };
  }

  async signIn(email: string, password: string): Promise<any> {
    this.logger.log('Processing sign-in for: ' + email);
    const user = await this.userModel.findOne({ email });

    if (!user) {
      this.logger.error('Invalid email or password for: ' + email);
      throw new BadRequestException('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      this.logger.error('Invalid email or password for: ' + email);
      throw new BadRequestException('Invalid email or password');
    }

    const token = this.jwtService.sign({ userId: user._id });
    this.logger.log('User successfully signed in: ' + email);
    return {
      accessToken: token,
    };
  }
}
