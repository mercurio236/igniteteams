import React from 'react';
import { View } from 'react-native';

import * as S from './styles';
import { ButtonIcon } from '@components/ButtonIcon';

type Props = {
    name: string;
    onRemove:() => void
}

export const PlayerCard: React.FC<Props> = ({ name, onRemove }) => {
    return (
        <S.Container>
            <S.Icon name='person' />
            <S.Name>{name}</S.Name>
            <ButtonIcon
            icon='close'
            type='SECUNDARY'
            onPress={onRemove}
            />
        </S.Container>
    )
}

