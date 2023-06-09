import React from 'react';
import * as S from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';


export const Groups: React.FC = () => {
  return (
    <S.Container>
      <Header/>
      <Highlight
      title='Turmas'
      subtitle='Jogue com sua turma'
      />
      <GroupCard title='Galera do ignite'/>
    </S.Container>
  )
}



