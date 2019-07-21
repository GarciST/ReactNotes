import * as React from 'react';
import { Input, Button, Divider } from 'react-native-elements';
import { ViewStyle, StyleSheet, ScrollView } from 'react-native';
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

interface RefUserForm {
    username: React.RefObject<Input>;
    email: React.RefObject<Input>;
    password: React.RefObject<Input>;
    confirmPassword: React.RefObject<Input>;
    name: React.RefObject<Input>;
    lastname: React.RefObject<Input>;
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

    const userForm = React.useRef<RefUserForm>({
        username: React.createRef<Input>(),
        email: React.createRef<Input>(),
        password: React.createRef<Input>(),
        confirmPassword: React.createRef<Input>(),
        name: React.createRef<Input>(),
        lastname: React.createRef<Input>(),
    });

    const { accountInfo, onSignUp, onUpdateField } = props;

    const onTextFieldChange = (field: string) => (text: string) => (
        onUpdateField ? onUpdateField({
            ...accountInfo,
            [field]: text,
        }) : null
    )


    return (
        <ScrollView contentContainerStyle={[style.trailerStyle]}>
            <Input
                ref={userForm.current.username}
                placeholder="Username"
                returnKeyType="next"
                autoFocus={true}
                leftIcon={{ type: "material", name: "person" }}
                containerStyle={[style.formInput]}
                errorStyle={{ color: 'red' }}
                keyboardAppearance="light"
                blurOnSubmit={false}
                value={accountInfo.username}
                onChangeText={onTextFieldChange("username") }
                onSubmitEditing={_ => onNextField(userForm.current.email)} />
            <Input
                ref={userForm.current.email}
                placeholder="Email"
                keyboardType="email-address"
                returnKeyType="next"
                leftIcon={{ type: "material", name: "email" }}
                containerStyle={[style.formInput]}
                errorStyle={{ color: 'red' }}
                autoCapitalize="none"
                keyboardAppearance="light"
                value={accountInfo.email}
                onChangeText={onTextFieldChange("email")}
                blurOnSubmit={true}
                onSubmitEditing={_ => onNextField(userForm.current.password)} />
            <Input
                ref={userForm.current.password}
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
                onChangeText={onTextFieldChange("password")}
                onSubmitEditing={_ => onNextField(userForm.current.confirmPassword)} />
            <Input
                ref={userForm.current.confirmPassword}
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
                onChangeText={onTextFieldChange("confirmPassword")}
                onSubmitEditing={_ => onNextField(userForm.current.name)} />
            <Divider style={[style.divider]} />
            <Input
                placeholder="Name"
                returnKeyType="next"
                ref={userForm.current.name}
                containerStyle={[style.formInput]}
                blurOnSubmit={false}
                value={accountInfo.name}
                onChangeText={onTextFieldChange("name")}
                onSubmitEditing={_ => onNextField(userForm.current.lastname)} />
            <Input
                placeholder="Last name"
                ref={userForm.current.lastname}
                blurOnSubmit={true}
                value={accountInfo.lastname}
                onChangeText={onTextFieldChange("lastname")}
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