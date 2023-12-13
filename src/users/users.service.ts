import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { password, ...rest } = createUserDto;
    const hashedPassword = await this.hashPassword(password);
    const user = this.usersRepository.create({
      ...rest,
      password: hashedPassword,
    });
    return this.usersRepository.save(user);
  }

  private async hashPassword(password: string): Promise<string> {
    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(email: string) {
    return this.usersRepository.findOneBy({ email: email });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.newPassword) {
      const hashedPassword = await bcrypt.hash(updateUserDto.newPassword, 10);
      updateUserDto.password = hashedPassword;
      delete updateUserDto.newPassword; // Supprimer `newPassword` pour éviter de le sauvegarder tel quel
    }

    // Mettre à jour l'utilisateur dans la base de données
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
