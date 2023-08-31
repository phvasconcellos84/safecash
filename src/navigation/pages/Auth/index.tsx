import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import AuthInput from '../../../components/AuthInput';
import {Loading} from '../../../components/Loading';
import LoginAPI from '../../../api/login';
import {enumMessageType, enumScreens} from '../../../helpers/enum';
import {hideMessage, showMessage} from '../../../reducers/messageBox';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { useNavigation } from '@react-navigation/native';

const Auth = () => {
    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('phvasconcellos84@gmail.com');
    const [password, setPassword] = useState('123456');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [stageNew, setStageNew] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const messageBox = useAppSelector(state => state.messageBox.config);

    const DoLogin = () => {
        const response = LoginAPI.DoLogin(email, password);

        if (!response) {
            return (
                dispatch(
                    showMessage({
                        type: enumMessageType.ALERT,
                        message: 'Usuário ou senha incorreto',
                        show: true
                    }),
                )
            )
        }

        if (messageBox.show) dispatch(hideMessage());

        navigation.reset({
            index: 1,
            routes: [{ name: 'main' }]
        });
    };

    const DoSignin = () => {};

    const renderButton = () => {
        if (isLoading) {
            return <Loading />;
        }

        return (
            <TouchableOpacity
                disabled={false}
                onPress={() => (stageNew ? DoSignin() : DoLogin())}
                style={{width: '100%'}}>
                <View style={[styles.button]}>
                    <Text style={styles.buttonText}>
                        {stageNew ? 'Cadastrar' : 'Entrar'}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <ImageBackground
            source={require('../../../assets/images/bg-login.jpg')}
            style={styles.backgroundContainer}>
            <Text style={styles.title}>SafeCash</Text>
            <View style={styles.formContainer}>
                <Text style={styles.subtitle}>
                    {stageNew
                        ? 'Crie sua conta'
                        : 'Informe seus dado para Logar'}
                </Text>

                {stageNew && (
                    <AuthInput
                        value={name}
                        placeholder="Nome"
                        onChangeText={setName}
                    />
                )}
                <AuthInput
                    value={email}
                    placeholder="E-mail"
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <AuthInput
                    value={password}
                    placeholder="Senha"
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                {stageNew && (
                    <AuthInput
                        value={confirmPassword}
                        placeholder="Confirmar Senha"
                        onChangeText={setConfirmPassword}
                        secureTextEntry={true}
                    />
                )}

                {renderButton()}
            </View>
            <TouchableOpacity
                style={{padding: 15}}
                onPress={() => setStageNew(!stageNew)}>
                <Text style={styles.buttonText}>
                    {stageNew
                        ? 'Já possui uma conta?'
                        : 'Quer criar uma conta?'}
                </Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default Auth;

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        // fontFamily: commonStyles.fontFamily,
        fontSize: 40,
        color: 'white',
        marginBottom: 10,
    },
    formContainer: {
        padding: 10,
        width: '90%',
        alignItems: 'center',
        backgroundColor: 'rgba(244,81,30,0.7)',
        borderRadius: 10,
    },
    subtitle: {
        // fontFamily: commonStyles.fontFamily,
        color: 'white',
        fontSize: 18,
        padding: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 10,
        padding: 14,
    },
    buttonText: {
        // fontFamily: commonStyles.fontFamily,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
