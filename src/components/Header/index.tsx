import React from 'react';
import * as S from './styles'


import logoImg from '@assets/logo.png'

type Props = {
    showBackButton?: boolean;
}

export const Header: React.FC<Props> = ({ showBackButton = false }) => {
    return (
        <S.Container>
            {
                showBackButton &&
                <S.BackButton>
                    <S.BackIcon />
                </S.BackButton>
            }
            <S.Logo source={logoImg} />
        </S.Container>
    )
}

