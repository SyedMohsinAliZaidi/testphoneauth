import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import auth from '@react-native-firebase/auth'
const Otp = ({ route: { params: { phoneNumber } }, navigation }) => {

    useEffect(() => {
        signInWithPhoneNo();
        console.log(phoneNumber, 'phoneNumber')
    }, [])
    const handlePress = () => {
       
        navigation.navigate('Welcome')
    }
    async function signInWithPhoneNo() {
        console.log(auth(),'asdasdasdasd')
        try {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber)
            console.log(confirmation,'confirmationconfirmation')
            alert(confirmation);
        }
        catch (e) {
            console.log(JSON.stringify(e),'asd')
            alert(JSON.stringify(e))
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Enter OTP</Text>
            <TextInput
                autoFocus
                // value={code}
                // onChangeText={setCode}
                keyboardType="numeric"
                style={styles.input}
            />
            <TouchableOpacity style={styles.loginBtn} onPress={handlePress}>
                <Text style={styles.loginText}>Confirm OTP</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
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
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 2,
        borderColor: 'lightblue',
        width: 300,
        marginVertical: 30,
        fontSize: 25,
        padding: 10,
        borderRadius: 8,
    },
    text: {
        fontSize: 25,
    },
});


export default Otp;