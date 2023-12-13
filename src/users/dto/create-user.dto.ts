import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDto {
    @ApiProperty({
        description: 'Prenom'
    })
    firstName: string;

    @ApiProperty({
        description: 'Nom'
    })
    lasttName: string;

    @ApiProperty({
        description: 'Mail'
    })
    email: string;

    @ApiProperty({
        description: 'Mot de passe'
    })
    password: string;

}