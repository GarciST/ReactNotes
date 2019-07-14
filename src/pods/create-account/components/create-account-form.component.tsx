import * as React from 'react';
import { Input, Button, Divider } from 'react-native-elements';
import { ViewStyle, StyleSheet, ScrollView } from 'react-native';
import themeStyle from '../../../styles/theme.style';

interface IProps {
    trailerStyle?: ViewStyle
    inputStyle?: ViewStyle
    buttonStyle?: ViewStyle
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

const onSignUp = () => {
    
}

export const CreateAccountForm = (props: IProps): JSX.Element => {

    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [lastname, setLastname] = React.useState("");

    const usernameInput = React.useRef<Input>(null);
    const emailInput = React.useRef<Input>(null);
    const passwordInput = React.useRef<Input>(null);
    const confirmPasswordInput = React.useRef<Input>(null);
    const nameInput = React.useRef<Input>(null);
    const lastnameInput = React.useRef<Input>(null);


    return (
        <ScrollView contentContainerStyle={[props.trailerStyle, style.trailerStyle]}>
            <Input
                ref={usernameInput}
                placeholder="Username"
                returnKeyType="next"
                autoFocus={true}
                leftIcon={{ type: "material", name: "person" }}
                containerStyle={[props.inputStyle, style.formInput]}
                errorStyle={{ color: 'red' }}
                keyboardAppearance="light"
                blurOnSubmit={false}
                onChangeText={setUsername}
                onSubmitEditing={_ => onNextField(emailInput)} />
            <Input
                ref={emailInput}
                placeholder="Email"
                keyboardType="email-address"
                returnKeyType="next"
                leftIcon={{ type: "material", name: "email" }}
                containerStyle={[props.inputStyle, style.formInput]}
                errorStyle={{ color: 'red' }}
                autoCapitalize="none"
                keyboardAppearance="light"
                onChangeText={setEmail}
                blurOnSubmit={true}
                onSubmitEditing={_ => onNextField(passwordInput)} />
            <Input
                ref={passwordInput}
                placeholder="Password"
                secureTextEntry={true}
                returnKeyType="next"
                leftIcon={{ type: "material", name: "lock" }}
                containerStyle={[props.inputStyle, style.formInput]}
                errorStyle={{ color: 'red' }}
                autoCapitalize="none"
                keyboardAppearance="light"
                blurOnSubmit={true}
                onChangeText={setPassword}
                onSubmitEditing={_ => onNextField(confirmPasswordInput)} />
            <Input
                ref={confirmPasswordInput}
                placeholder="Confim password"
                secureTextEntry={true}
                returnKeyType="next"
                leftIcon={{ type: "material", name: "lock" }}
                containerStyle={[props.inputStyle, style.formInput]}
                autoCapitalize="none"
                keyboardAppearance="light"
                blurOnSubmit={false}
                errorStyle={{ color: 'red' }}
                onChangeText={setConfirmPassword}
                onSubmitEditing={_ => onNextField(nameInput)} />
            <Divider style={[style.divider]} />
            <Input
                placeholder="Name"
                returnKeyType="next"
                ref={nameInput}
                containerStyle={[props.inputStyle, style.formInput]}
                blurOnSubmit={false}
                onChangeText={setName}
                onSubmitEditing={_ => onNextField(lastnameInput)} />
            <Input
                placeholder="Last name"
                ref={lastnameInput}
                blurOnSubmit={true}
                onChangeText={setLastname}
                returnKeyType="done"
                containerStyle={[props.inputStyle, style.formInput]} />
            <Button
                title="Sing up"
                containerStyle={[style.submitContainer]}
                buttonStyle={[props.buttonStyle, style.submitButton]} />
        </ScrollView>
    );
}