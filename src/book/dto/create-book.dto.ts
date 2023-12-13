import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({
    description: 'Nom du livre',
  })
  title: string;

  @ApiProperty({
    description: 'Auteur du livre',
  })
  author: string;
}
