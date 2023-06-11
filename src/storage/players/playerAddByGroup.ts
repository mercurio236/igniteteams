import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLETION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";
import { PlayerStorageDTO } from './PlayerStorageDTO'

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
    try{

        const storedPlayers =  await playersGetByGroup(group)

        const playerAlreadyExiste = storedPlayers.filter(player => player.name === newPlayer.name)

        if(playerAlreadyExiste.length > 0){
            throw new AppError('Essa pessoa já está adicionada em um time aqui.')
            
        }

        const storage = JSON.stringify([...storedPlayers, newPlayer])

        await AsyncStorage.setItem(`${PLAYER_COLLETION}-${group}`, storage)


    }catch(error){
        throw (error)
    }
}