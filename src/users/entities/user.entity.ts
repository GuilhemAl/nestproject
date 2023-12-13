import { isEmail } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ObjectIdColumn } from 'typeorm';
import { Length, IsEmail } from 'class-validator';

@Entity('users')
export class User {
    @ObjectIdColumn()
    @ApiProperty({ type: Number, description: 'ID', example: 2 })
    id: string;
    @ApiProperty({
        type: String,
        description: 'Email',
        example: 'johndoe@email.com',
    })
    
    @Column({ type: String, unique: true, nullable: false })
    @IsEmail()
    @Length(3,20)
    email: string;
    @ApiProperty({
        type: String,
        description: 'Mot de passe',
        example: 'azertyuiop',
    })
    @Column()
    @Length(3,20)
    password: string;
    @ApiProperty({ type: String, description: 'Nom', example: 'Doe' })
    @Column()
    @Length(3,20)
    lastName: string;
    @ApiProperty({ type: String, description: 'Prénom', example: 'John' })
    @Column()
    @Length(3,20)
    firstName: string;
}