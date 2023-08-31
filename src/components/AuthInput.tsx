import React from 'react';
import {
	TextInput,
	View,
	StyleSheet
} from 'react-native';
import commonStyles from '../assets/commonStyles';

const AuthInput = props => {
	return (
		<View style={styles.container}>
			<TextInput {...props} style={styles.input} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		marginTop: 10,
		backgroundColor: 'white',
		fontSize: 16,
		borderRadius: 5,
	},
	input: {
		// fontFamily: commonStyles.fontFamily,
		padding: 11,
		fontSize: 16,
	},
});

export default AuthInput;
