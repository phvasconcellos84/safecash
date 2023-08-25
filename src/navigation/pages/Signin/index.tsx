import React from 'react';
import {
    View,
    StyleSheet,
    Image,
} from 'react-native';
import { Loading } from '../../../components/Loading';

const Signin = () => {
    return (
        <View
            style={styles.container}
        >
            <View style={styles.imageView}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/images/LogoFull.png')}
                    resizeMode='contain' />
            </View>
            <Loading />
        </View>
    );
}

export default Signin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    logo: {
        width: '100%',
        height: 100,
    },
    imageView: {
        width: '100%',
        padding: 10,
    },
});