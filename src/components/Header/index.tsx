import React from 'react';
import { useNavigation } from '@react-navigation/native'
import * as S from './styles'


import logoImg from '@assets/logo.png'

type Props = {
    showBackButton?: boolean;
}

export const Header: React.FC<Props> = ({ showBackButton = false }) => {
    const navigation = useNavigation()

    function handleGoBack() {
        navigation.navigate('groups')
    }

    return (
        <S.Container>
            {
                showBackButton &&
                <S.BackButton onPress={handleGoBack}>
                    <S.BackIcon />
                </S.BackButton>
            }
            <S.Logo source={logoImg} />
        </S.Container>
    )
}

