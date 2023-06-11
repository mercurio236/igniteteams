import React, { useCallback } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native'


import * as S from './styles';




export const Input: React.FC<TextInputProps> = ({ ...rest }) => {
    const { COLORS } = useTheme()
    return (
        <S.Container
            placeholderTextColor={COLORS.GRAY_300}
            {...rest}
        />
    )
}
