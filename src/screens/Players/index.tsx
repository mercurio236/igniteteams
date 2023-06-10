import React from 'react';
import { View } from 'react-native';

import * as S from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

export const Players: React.FC = () => {
  return (
    <S.Container>
        <Header showBackButton/>
        <Highlight title='Nome da turma' subtitle='adicione a galera e separe os times'/>
        
    </S.Container>
  )
}
