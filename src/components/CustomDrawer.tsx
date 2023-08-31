import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    StatusBar,
    Image,
    ImageBackground,
    Platform,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import commonStyles from '../assets/commonStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {enumScreens} from '../helpers/enum';

const CustomDrawer = props => {
    const name = 'Paulo Henrique';
    const navigation = useNavigation();

    const Logout = () => {
        navigation.reset({
            index: 1,
            routes: [{name: enumScreens.auth.name}],
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../assets/images/bg-drawer.png')}
                style={styles.header}>
                <View style={styles.HeaderBox}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: `https://ui-avatars.com/api/?name=${name}&background=random&color=random&format=png`,
                        }}
                    />
                    <View style={styles.userBox}>
                        <Text style={styles.userSalutation}>Olá, </Text>
                        <Text style={styles.userName}>{name}</Text>
                    </View>
                </View>
            </ImageBackground>
            <DrawerContentScrollView style={styles.drawerList} {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View style={styles.footer}>
                <View style={styles.footerBox}>
                    <TouchableOpacity
                        style={styles.logoutButton}
                        onPress={() => Logout()}>
                        <Icon
                            name="logout"
                            size={20}
                            color={commonStyles.colors.darkGray}
                            style={styles.buttonIcon}
                        />
                        <Text style={styles.logoutBtnText}>Sair/Logout</Text>
                    </TouchableOpacity>
                    <View style={styles.developerBox}>
                        <Text style={styles.developerText}>
                            Desenvolvido por
                        </Text>
                        <Image
                            source={require('../assets/images/LogoFull.png')}
                            resizeMode="contain"
                            style={styles.developerImage}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: commonStyles.colors.primary,
    },
    drawerList: {
        backgroundColor: commonStyles.colors.secundary,
    },
    header: {
        width: '100%',
        height: Platform.OS === 'ios' ? 130 : 160,
    },
    avatar: {
        marginTop: 10,
        width: 70,
        height: 70,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: commonStyles.colors.primaryStrong,
    },
    HeaderBox: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        paddingTop:
            StatusBar.currentHeight === undefined
                ? 10
                : StatusBar.currentHeight + 10,
    },
    userBox: {
        marginTop: 10,
        flexDirection: 'row',
    },
    userName: {
        fontWeight: 'bold',
        color: commonStyles.colors.secundary,
    },
    userSalutation: {
        color: commonStyles.colors.secundary,
    },
    footer: {
        height: 100,
    },
    footerBox: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: commonStyles.colors.lightGray,
        backgroundColor: commonStyles.colors.secundary,
        borderBottomWidth: 2,
        justifyContent: 'flex-end',
    },
    logoutButton: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 15
    },
    logoutBtnText: {
        color: commonStyles.colors.darkGray,
        paddingHorizontal: 5,
        fontSize: commonStyles.font.small,
    },
    buttonIcon: {
        padding: 5,
    },
    developerBox: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 8,
        backgroundColor: commonStyles.colors.black,
    },
    developerText: {
        color: commonStyles.colors.lightGray,
    },
    developerImage: {
        width: 70,
        height: 20,
    },
});
