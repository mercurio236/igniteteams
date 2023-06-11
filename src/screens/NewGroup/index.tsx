import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'

import * as S from './styles'
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { groupCreate } from '@storage/group/groupCreate';

export const NewGroup: React.FC = () => {
    const [group, setGroup] = useState('')


    const navigation = useNavigation();

    async function handleNew() {
        try {

            await groupCreate(group)
            navigation.navigate('players', { group })
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <S.Cotainer>
            <Header showBackButton />

            <S.Content>
                <S.Icon />
                <Highlight
                    title='Nova turma'
                    subtitle='crie a turma para adicinar pessoas'
                />
                <Input
                    placeholder='Nome da turma'
                    value={group}
                    onChangeText={setGroup}
                />
                <Button
                    title='Criar'
                    style={{ marginTop: 20 }}
                    onPress={handleNew}
                />
            </S.Content>
        </S.Cotainer>
    )
}

