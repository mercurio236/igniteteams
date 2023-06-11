import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLETION } from "@storage/storageConfig";
import { groupGetAll } from "./groupGetAll";

export async function groupCreate(newGroup: string) {
    try {
        const storageGroups = await groupGetAll()

        const storage = JSON.stringify([...storageGroups, newGroup])
        await AsyncStorage.setItem(GROUP_COLLETION, storage)

    } catch (error) {
        throw error
    }
}