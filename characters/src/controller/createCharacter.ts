import { CreateCharacterDto } from "../dto/createCharacter.dto"

module.exports = async (req: any, res: any): Promise<any | { name: string }> => {
    let newChar: CreateCharacterDto = req.body
    res.json(newChar)
} 