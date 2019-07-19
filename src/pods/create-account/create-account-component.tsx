import * as React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { CreateAccountForm } from './components'
import { createEmptyAccount, CreateAccountEntity } from './create-account.model';


interface Props { }

interface State {
    accountInfo: CreateAccountEntity;
    showLoginFailed: boolean;
}

interface Styles {
    container?: ViewStyle;
}

const style = StyleSheet.create<Styles>({
    container: {
        flex: 1, flexDirection: "column"
    }
})

export const CreateAccountComponent = (props: Props) => {

    const [state, setState] = React.useState<State>({
        accountInfo: createEmptyAccount(),
        showLoginFailed: false,
    });

    const onSignUp = () => {

    }

    const onUpdateField = (account: CreateAccountEntity) => {
        setState({
            ...state,
            accountInfo: {
                ...account
            }
        }) 
        console.log(state);
    }

    return (
        <View style={style.container}>
            <CreateAccountForm accountInfo={state.accountInfo} onSignUp={onSignUp} onUpdateField={onUpdateField} />
        </View>
    )
}