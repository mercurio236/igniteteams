import React from 'react';
import { View } from 'react-native';

import * as S from './styles'

type Props = {
   message:string; 
}

export const ListEmpty: React.FC<Props> = ({message}) => {
  return (
    <S.Container>
        <S.Message>
            {message}
        </S.Message>
    </S.Container>
  )
}

