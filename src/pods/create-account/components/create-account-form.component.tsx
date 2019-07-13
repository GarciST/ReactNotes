import * as React from 'react';
import { Input, Button } from 'react-native-elements';
import { View, ViewStyle } from 'react-native';

interface IProps {
    trailerStyle?: ViewStyle
    inputStyle?: ViewStyle
    buttonStyle?: ViewStyle
}



export const CreateAccountForm = (props: IProps): JSX.Element => {

    const [username, setUsername] = React.useState();
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [confirmPassword, setConfirmPassword] = React.useState();

    return (
        <View style={props.trailerStyle}>
            <Input
                placeholder="Username"
                leftIcon={{ type: "material", name: "person" }}
                style={props.inputStyle}
                onSubmitEditing={_ => email.focus()} />
            <Input
                ref={email}
                placeholder="Email"
                leftIcon={{ type: "material", name: "email" }}
                style={props.inputStyle} />
            <Input
                ref={password}
                placeholder="Password"
                leftIcon={{ type: "material", name: "lock" }}
                style={props.inputStyle} />
            <Input
                ref={confirmPassword}
                placeholder="Confim password"
                leftIcon={{ type: "material", name: "lock" }}
                style={props.inputStyle} />
            <Input
                placeholder="Name"
                style={props.inputStyle} />
            <Input
                placeholder="Last name"
                style={props.inputStyle} />
            <Button
                title="Sing up"
                style={props.buttonStyle} />
        </View>
    );
}