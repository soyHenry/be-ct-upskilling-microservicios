import { IsString, IsNotEmpty } from "class-validator";

export class CreateCharacterDto {
    @IsString({ message: 'El personaje debe contener letras' })
    @IsNotEmpty({ message: 'El personaje debe tener un nombre' })
    name: string = ''
}