import React, { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import * as S from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button';
import { groupGetAll } from '@storage/group/groupGetAll';
import { Loading } from '@components/Loading';


export const Groups: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [groups, setGroups] = useState<string[]>([]);
  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)

      const data = await groupGetAll()
      setGroups(data)

      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  function handleOpenGrou(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <S.Container>
      <Header />
      <Highlight
        title='Turmas'
        subtitle='Jogue com sua turma'
      />
      {
        isLoading ? <Loading /> :
          <FlatList
            data={groups}
            keyExtractor={item => item}
            renderItem={({ item }) => <GroupCard title={item} onPress={() => handleOpenGrou(item)} />}
            contentContainerStyle={groups.length === 0 && { flex: 1 }}
            ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar a primeira turma?' />}
          />
      }
      <Button
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </S.Container>
  )
}



