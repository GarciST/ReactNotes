import * as React from 'react';
import { Input, Button, Divider } from 'react-native-elements';
import { ViewStyle, StyleSheet, ScrollView, TextInputChangeEventData, NativeSyntheticEvent } from 'react-native';
import themeStyle from '../../../styles/theme.style';
import { CreateAccountEntity } from '../create-account.model';

interface Props {
    accountInfo: CreateAccountEntity;
    onSignUp?: () => void;
    onUpdateField?: (account: CreateAccountEntity) => void;
}

interface Styles {
    submitContainer?: ViewStyle;
    submitButton?: ViewStyle;
    formInput?: ViewStyle;
    trailerStyle?: ViewStyle;
    divider?: ViewStyle;
}

const style = StyleSheet.create<Styles>({
    submitButton: {
        minWidth: 200
    },
    submitContainer: {
        padding: 30,
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: 'center',
    },
    formInput: {
        marginBottom: 40,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: 'center',
    },
    trailerStyle: {
        paddingHorizontal: "5%",
    },
    divider: {
        height: 2,
        backgroundColor: themeStyle.PRIMARY_COLOR,
        marginBottom: 20,
    }
})

const onNextField = (input: React.RefObject<Input>): void => {
    if (input && input.current) input.current.focus()
}




export const CreateAccountForm = (props: Props): JSX.Element => {

    const usernameInput = React.useRef<Input>(null);
    const emailInput = React.useRef<Input>(null);
    const passwordInput = React.useRef<Input>(null);
    const confirmPasswordInput = React.useRef<Input>(null);
    const nameInput = React.useRef<Input>(null);
    const lastnameInput = React.useRef<Input>(null);

    const { accountInfo, onSignUp, onUpdateField } = props;

    const onTextFieldChange = (event: NativeSyntheticEvent<TextInputChangeEventData>): void =>{
        const { text, target } = event.nativeEvent;
        console.log(event.nativeEvent)
        onUpdateField ? onUpdateField({
            ...accountInfo,
            [target]: text
        }) : undefined
    }


    return (
        <ScrollView contentContainerStyle={[style.trailerStyle]}>
            <Input
                ref={usernameInput}
                key="username"
                placeholder="Username"
                returnKeyType="next"
                autoFocus={true}
                leftIcon={{ type: "material", name: "person" }}
                containerStyle={[style.formInput]}
                errorStyle={{ color: 'red' }}
                keyboardAppearance="light"
                blurOnSubmit={false}
                value={accountInfo.username}
                onChange={onTextFieldChange}
                onSubmitEditing={_ => onNextField(emailInput)} />
            <Input
                ref={emailInput}
                placeholder="Email"
                keyboardType="email-address"
                returnKeyType="next"
                leftIcon={{ type: "material", name: "email" }}
                containerStyle={[style.formInput]}
                errorStyle={{ color: 'red' }}
                autoCapitalize="none"
                keyboardAppearance="light"
                value={accountInfo.email}
                onChange={onTextFieldChange}
                blurOnSubmit={true}
                onSubmitEditing={_ => onNextField(passwordInput)} />
            <Input
                ref={passwordInput}
                placeholder="Password"
                secureTextEntry={true}
                returnKeyType="next"
                leftIcon={{ type: "material", name: "lock" }}
                containerStyle={[style.formInput]}
                errorStyle={{ color: 'red' }}
                autoCapitalize="none"
                keyboardAppearance="light"
                blurOnSubmit={true}
                value={accountInfo.password}
                onChange={onTextFieldChange}
                onSubmitEditing={_ => onNextField(confirmPasswordInput)} />
            <Input
                ref={confirmPasswordInput}
                placeholder="Confim password"
                secureTextEntry={true}
                returnKeyType="next"
                leftIcon={{ type: "material", name: "lock" }}
                containerStyle={[style.formInput]}
                autoCapitalize="none"
                keyboardAppearance="light"
                blurOnSubmit={false}
                errorStyle={{ color: 'red' }}
                value={accountInfo.confirmPassword}
                onChange={onTextFieldChange}
                onSubmitEditing={_ => onNextField(nameInput)} />
            <Divider style={[style.divider]} />
            <Input
                placeholder="Name"
                returnKeyType="next"
                ref={nameInput}
                containerStyle={[style.formInput]}
                blurOnSubmit={false}
                value={accountInfo.name}
                onChange={onTextFieldChange}
                onSubmitEditing={_ => onNextField(lastnameInput)} />
            <Input
                placeholder="Last name"
                ref={lastnameInput}
                blurOnSubmit={true}
                value={accountInfo.lastname}
                onChange={onTextFieldChange}
                returnKeyType="done"
                containerStyle={[style.formInput]} />
            <Button
                title="Sing up"
                containerStyle={[style.submitContainer]}
                buttonStyle={[style.submitButton]}
                onPress={onSignUp} />
        </ScrollView>
    );
}