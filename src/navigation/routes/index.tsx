import React, { useState } from "react";
import { 
    View,
    Image,
    StyleSheet
} from "react-native";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { Loading } from "../../components/Loading";

const Routes = () => {
    const [isAuthenticated, setIsAuthenticaded] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        return (
            <View
                style={styles.container}
            >
                <View style={styles.imageView}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/images/LogoFull.png')}
                        resizeMode='contain' />
                </View>
                <Loading />
            </View>
        );
    }

    return (
        isAuthenticated ? <AppRoutes /> : <AuthRoutes />
    );
}

export default Routes;

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