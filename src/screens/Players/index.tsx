import React, { useState } from 'react';
import { FlatList } from 'react-native';

import * as S from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';

export const Players: React.FC = () => {
  const [team, setTeam] = useState('Time A')
  const [players, setPlayers] = useState([])

  return (
    <S.Container>
      <Header showBackButton />
      <Highlight title='Nome da turma' subtitle='adicione a galera e separe os times' />
      <S.Form>
        <Input
          placeholder='Nome da pessoa'
          autoCorrect={false}
        />
        <ButtonIcon
          icon='add'

        />
      </S.Form>
      <S.HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <S.NumberOfPlayrs>{players.length}</S.NumberOfPlayrs>
      </S.HeaderList>

    </S.Container>
  )
}
