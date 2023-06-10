import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import * as S from './styles';

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: S.ButtonIconTypeStyleProps;
}

export const ButtonIcon: React.FC<Props> = ({ icon, type = 'PRIMARY', ...rest }) => {
    return (
        <S.Container>
            <S.Icon
                name={icon}
                type={type}
            />
        </S.Container>
    )
}
