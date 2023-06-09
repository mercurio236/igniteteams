import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLETION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerRemoveByGroup(playerName:string, group:string){
    try{
        const storage = await playersGetByGroup(group)

        const filtered = storage.filter(player => player.name !== playerName)
        
        const players = JSON.stringify(filtered)

        await AsyncStorage.setItem(`${PLAYER_COLLETION}-${group}`, players)

    }catch(error){
        throw error
    }
}