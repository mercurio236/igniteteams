import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import { Container } from './styles';

export const Groups: React.FC = () => {
  return (
    <View style={styles.container}>
        <Text>Groups</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

