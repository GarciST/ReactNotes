import * as React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { CreateAccountForm } from './components'
import { createEmptyAccount, CreateAccountEntity } from './create-account.model';


interface Props {
    onSignUp: (account: CreateAccountEntity) => void;
}

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

    const { onSignUp } = props;

    const onSignUpButton = (): void => onSignUp({ ...state.accountInfo })

    const [state, setState] = React.useState<State>({
        accountInfo: createEmptyAccount(),
        showLoginFailed: false,
    });

    React.useEffect(() => {
        console.log(state);
    }, [state])

    const onUpdateField = (account: CreateAccountEntity) => {
        console.log(account);
        setState({
            ...state,
            accountInfo: {
                ...account
            }
        })
    }

    return (
        <View style={style.container}>
            <CreateAccountForm
                accountInfo={state.accountInfo}
                onSignUp={onSignUpButton}
                onUpdateField={onUpdateField} />
        </View>
    )
}