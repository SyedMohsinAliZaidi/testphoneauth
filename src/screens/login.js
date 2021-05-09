import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const login = ({ navigation }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const handlePress = () => {
        navigation.navigate('OTP',{phoneNumber});
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Phone Auth</Text>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Phone Number."
                    placeholderTextColor="#003f5c"
                    onChangeText={text => setPhoneNumber(text)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn} onPress={handlePress}>
                <Text style={styles.loginText}>Send OTP</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white"
    }
});


export default login;