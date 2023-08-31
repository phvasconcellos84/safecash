import React, { useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Loading} from '../../../components/Loading';
import {enumScreens} from '../../../helpers/enum';

const Preload = () => {
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        if (isLoading) {
            return (
                <View style={styles.container}>
                    <View style={styles.imageView}>
                        <Image
                            style={styles.logo}
                            source={require('../../../assets/images/LogoFull-hd.png')}
                            resizeMode="contain"
                        />
                    </View>
                    <Loading />
                </View>
            );
        }

        navigation.reset({
            index: 1,
            routes: [{name: enumScreens.auth.name}],
        });
    }, []);
};

export default Preload;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
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
