import React from 'react';
import * as S from './styles'
import logoImg from '@assets/logo.png'



export const Header: React.FC = () => {
  return (
    <S.Container>
        <S.Logo source={logoImg}/>
    </S.Container>
  )
}

