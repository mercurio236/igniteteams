import React, { useCallback } from 'react';
import { TextInputProps, TextInput } from 'react-native';
import { useTheme } from 'styled-components/native'


import * as S from './styles';

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>
}


export const Input: React.FC<Props> = ({ inputRef, ...rest }) => {
    const { COLORS } = useTheme()
    return (
        <S.Container
            ref={inputRef}
            placeholderTextColor={COLORS.GRAY_300}
            {...rest}
        />
    )
}
