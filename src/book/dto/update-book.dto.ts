import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @ApiProperty({
    description: 'Nouveau nom du livre',
    required: false,
  })
  title?: string;

  @ApiProperty({
    description: 'Nouvel auteur du livre',
    required: false,
  })
  author?: string;
}
