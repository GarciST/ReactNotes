import * as React from 'react';
import { Input, Button } from 'react-native-elements';
import { View, ViewStyle } from 'react-native';

interface IProps {
    trailerStyle?: ViewStyle
    inputStyle?: ViewStyle
    buttonStyle?: ViewStyle
}

const onNextField = (input: React.RefObject<Input>): void => {
    if (input && input.current) input.current.focus()
}

export const CreateAccountForm = (props: IProps): JSX.Element => {

    const username = React.useRef<Input>(null);
    const email = React.useRef<Input>(null);
    const password = React.useRef<Input>(null);
    const confirmPassword = React.useRef<Input>(null);
    const name = React.useRef<Input>(null);
    const lastname = React.useRef<Input>(null);


    return (
        <View style={props.trailerStyle}>
            <Input
                ref={username}
                placeholder="Username"
                textContentType="username"
                returnKeyType="next"
                autoFocus={true}
                leftIcon={{ type: "material", name: "person" }}
                style={props.inputStyle}
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID ERROR HERE'
                onSubmitEditing={_ => onNextField(email)} />
            <Input
                ref={email}
                placeholder="Email"
                keyboardType="email-address"
                textContentType="emailAddress"
                returnKeyType="next"
                leftIcon={{ type: "material", name: "email" }}
                style={props.inputStyle}
                errorStyle={{ color: 'red' }}
                autoCapitalize="none"
                errorMessage='ENTER A VALID ERROR HERE'
                onSubmitEditing={_ => onNextField(password)} />
            <Input
                ref={password}
                placeholder="Password"
                textContentType="newPassword"
                secureTextEntry={true}
                returnKeyType="next"
                leftIcon={{ type: "material", name: "lock" }}
                style={props.inputStyle}
                errorStyle={{ color: 'red' }}
                autoCapitalize="none"
                errorMessage='ENTER A VALID ERROR HERE'
                onSubmitEditing={_ => onNextField(confirmPassword)} />
            <Input
                ref={confirmPassword}
                placeholder="Confim password"
                textContentType="password"
                secureTextEntry={true}
                returnKeyType="next"
                leftIcon={{ type: "material", name: "lock" }}
                style={props.inputStyle}
                autoCapitalize="none"
                errorStyle={{ color: 'red' }}
                errorMessage='ENTER A VALID ERROR HERE'
                onSubmitEditing={_ => onNextField(name)} />
            <Input
                placeholder="Name"
                returnKeyType="next"
                ref={name}
                style={props.inputStyle}
                onSubmitEditing={_ => onNextField(lastname)} />
            <Input
                placeholder="Last name"
                ref={lastname}
                style={props.inputStyle} />
            <Button
                title="Sing up"
                style={props.buttonStyle} />
        </View>
    );
}