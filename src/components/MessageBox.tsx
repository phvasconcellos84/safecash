import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {enumMessageType} from '../helpers/enum';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {hideMessage} from '../reducers/messageBox';
import {useAppSelector, useAppDispatch} from '../hooks';
import commonStyles from '../assets/commonStyles';

export const MessageBox = () => {
    const [colorBox, setColorBox] = useState(
        commonStyles.colors.msgBoxJUSTMESSAGE,
    );
    const msg = useAppSelector(state => state.messageBox.config);
    const dispatch = useAppDispatch();

    useEffect(() => {
        switch (msg.type) {
            case enumMessageType.ALERT:
                setColorBox(commonStyles.colors.msgBoxALERT);
                break;
            case enumMessageType.ERROR:
                setColorBox(commonStyles.colors.msgBoxERROR);
                break;
            default:
                setColorBox(commonStyles.colors.msgBoxJUSTMESSAGE);
        }
    }, [msg]);

    const hideMessageBox = () => {
        return dispatch(hideMessage());
    };

    const CloseButton = props => {
        return (
            <View>
                <TouchableOpacity onPress={props.onPress} style={props.style}>
                    <Icon name="close" size={30} color={colorBox} />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        msg.show && (
            <View style={styles.content}>
                <View style={[styles.innerBox, {backgroundColor: colorBox}]}>
                    <CloseButton
                        style={[styles.closeButtom, {borderColor: colorBox}]}
                        onPress={() => hideMessageBox()}
                    />
                    <Text style={styles.text}>{msg.message}</Text>
                </View>
            </View>
        )
    );
};

const styles = StyleSheet.create({
    content: {
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        width: '100%',
        padding: 5,
    },
    innerBox: {
        flex: 1,
        padding: 10,
        backgroundColor: 'blue',
        width: '100%',
        borderRadius: 5,
    },
    closeButtom: {
        position: 'absolute',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 25,
        right: 0,
        top: -25,
    },
    text: {
        color: '#FFF',
        fontWeight: 'bold',
        padding: 5,
    },
});
