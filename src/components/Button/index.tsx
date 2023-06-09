import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles'

type Props = TouchableOpacityProps & {
    title: string;
    type?: S.ButtonTypeStyleProps
}

export const Button: React.FC<Props> = ({title, type = 'PRIMARY', ...rest}) => {
  return (
    <S.Container type={type} {...rest} >
        <S.Title>
            {title}
        </S.Title>
    </S.Container>
  )
}
