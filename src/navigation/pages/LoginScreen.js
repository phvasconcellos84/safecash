import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import backgroundImage from '../../assets/images/bg-login.jpg';
import AuthInput from '../../components/AuthInput';
import commonStyles from '../../assets/commonStyles';

const LoginScreen = () => {
	const [stageNew, setStageNew] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState('');

	const renderButton = () => {
		if (isLoading) {
			return (
				<ActivityIndicator
					style={{ marginTop: 12, marginBottom: 4 }}
					size="large"
					color="white"
				/>
			);
		}

		const validation = [];

		validation.push(email && email.includes('@'));
		validation.push(password && password.length >= 5);

		if (stageNew) {
			validation.push(name && name.trim());
			validation.push(confirmPassword);
			validation.push(password === confirmPassword);
		}

		const isValid = validation.reduce((all, v) => all && v);

		return (
			<TouchableOpacity
				disabled={!isValid}
				onPress={this.signinOrSignup}
				style={{ width: '100%' }}>
				<View style={[styles.button, !isValid ? styles.inactive : {}]}>
					<Text style={styles.buttonText}>
						{stageNew ? 'Cadastrar' : 'Entrar'}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}

	const renderMessage = () => {
		if (!message) return null;

		return loginMessage[message]
			? loginMessage[message]
			: 'Erro desconhecido. Tente novamente.';
	}

	return (
		<ImageBackground source={backgroundImage} style={styles.background}>
			<Text style={styles.title}>SafeCash</Text>
			<View style={styles.formContainer}>
				<Text style={styles.subtitle}>
					{stageNew
						? 'Crie sua conta'
						: 'Informe seus dado para Logar'}
				</Text>
				{stageNew && (
					<AuthInput
						placeholder="Nome"
						value={name}
						onChangeText={value => setName(value)}
					/>
				)}
				<AuthInput
					placeholder="E-mail"
					value={email}
					onChangeText={value => setEmail(value)}
					keyboardType="email-address"
				/>
				<AuthInput
					placeholder="Senha"
					value={password}
					onChangeText={value => setPassword(value)}
					secureTextEntry={true}
				/>
				{stageNew && (
					<AuthInput
						placeholder="Confirmar Senha"
						value={confirmPassword}
						onChangeText={value => setConfirmPassword(value)}
						secureTextEntry={true}
					/>
				)}
				{renderButton()}
			</View>
			<TouchableOpacity
				style={{ padding: 10 }}
				onPress={() => setStageNew(!stageNew)
				}>
				<Text style={styles.buttonText}>
					{stageNew
						? 'Já possui uma conta?'
						: 'Quer criar uma conta?'}
				</Text>
			</TouchableOpacity>
		</ImageBackground>
	);
}

export default LoginScreen;

const styles = StyleSheet.create({
	background: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontFamily: commonStyles.fontFamily,
		fontSize: 40,
		color: 'white',
		marginBottom: 10,
	},
	formContainer: {
		padding: 10,
		width: '90%',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.7)',
		borderRadius: 10,
	},
	subtitle: {
		fontFamily: commonStyles.fontFamily,
		color: 'white',
		fontSize: 18,
	},
	button: {
		backgroundColor: '#00796b',
		alignItems: 'center',
		marginTop: 10,
		padding: 10,
	},
	buttonText: {
		fontFamily: commonStyles.fontFamily,
		color: 'white',
		fontSize: 18,
	},
	inactive: {
		backgroundColor: '#014a42',
	},
});
