import React from 'react';


import * as S from './styles'

type Props = {
    title: string;
    subtitle: string;
}

export const Highlight: React.FC<Props> = ({ title, subtitle }) => {
    return (
        <S.Container>
            <S.Title>
                {title}
            </S.Title>
            <S.Subtitle>
                {subtitle}
            </S.Subtitle>
        </S.Container>
    )
}

