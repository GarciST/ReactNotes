import * as React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { CreateAccountForm } from './components'


interface Props {}

interface Styles {
    container?: ViewStyle;
}

const style = StyleSheet.create<Styles>({
    container: {
        flex:1, flexDirection: "column"
    }
})

export const CreateAccountComponent = (props: Props) => {
    return(
        <View style={style.container}>
            <CreateAccountForm />
        </View>
    )
}