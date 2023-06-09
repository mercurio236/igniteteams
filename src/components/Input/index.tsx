import React, { useCallback } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native'


import * as S from './styles';




export const Input: React.FC<TextInputProps> = ({ ...rest }) => {
    return (
        <S.Container
            placeholderTextColor='gray'
            {...rest}
        />
    )
}
