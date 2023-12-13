import { ApiProperty } from "@nestjs/swagger";


export class signInDto {
    @ApiProperty({
        description: 'Mail'
    })
    email: string;

    @ApiProperty({
        description: 'Mot de passe'
    })
    password: string;

}