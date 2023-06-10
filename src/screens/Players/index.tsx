import React from 'react';
import { View } from 'react-native';

import * as S from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';

export const Players: React.FC = () => {
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
      <Filter title='Time A' />
    </S.Container>
  )
}
