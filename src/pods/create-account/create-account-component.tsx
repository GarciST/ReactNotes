import * as React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { CreateAccountForm } from './components'


interface Styles {
    trailer: ViewStyle;
}

interface Props {}

const styles = StyleSheet.create<Styles>({
    trailer: {
        paddingHorizontal: 20
    }
});

export const CreateAccountComponent = (props: Props) => {
    return(
        <View style={styles.trailer}>
            <CreateAccountForm />
        </View>
    )
}