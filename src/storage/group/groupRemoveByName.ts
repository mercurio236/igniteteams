import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLETION, PLAYER_COLLETION } from "@storage/storageConfig";

import { groupGetAll } from "./groupGetAll";

export async function groupRemoveByName(groupDeleted:string){
    try{
        const storedGroups = await groupGetAll()

        const groups = storedGroups.filter(group => group !== groupDeleted)

        await AsyncStorage.setItem(GROUP_COLLETION, JSON.stringify(groups))
        await AsyncStorage.removeItem(`${PLAYER_COLLETION}-${groupDeleted}`)
    }catch(error){
        throw error
    }
}