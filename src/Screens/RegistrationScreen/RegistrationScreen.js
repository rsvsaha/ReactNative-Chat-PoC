import React from 'react';
import { View,Text, TextInput,StyleSheet, Button } from 'react-native';

const RegistrationScreen = (props) => {

    const signUpAction = () => {

        // do sign up and navigate to login screen on successful sign up navigate to login Screen



    }


    return (<View style={styles.registrationContainer}>
        <Text style={styles.registrationHeader}>Registration</Text>
        <View style={styles.inputArea}> 
            <TextInput style={styles.registrationTextFields} placeholder="Enter your Name"></TextInput>
            <TextInput style={styles.registrationTextFields} placeholder="Enter your EmailId"></TextInput>
            <TextInput style={styles.registrationTextFields} placeholder="Enter your password" secureTextEntry={true}></TextInput>
            <TextInput style={styles.registrationTextFields} placeholder="Re Enter your password" secureTextEntry={true}></TextInput>
        </View>
        <View style={styles.signUpArea}>
            <Button title="SIGN UP" onPress={signUpAction}></Button>
        </View>
    
    
    
    </View>)



}




const styles = StyleSheet.create({
    registrationContainer:{
        alignSelf:'stretch',
        display:'flex',
        flex:1,
        padding:10,
        backgroundColor:'#000',
        justifyContent:"center"
    },
    registrationHeader:{
        fontSize:24,
        color:'#fff',
        paddingBottom:10,
        marginBottom:10,
        borderBottomColor:'#00f',
        borderBottomWidth:1,
    },
    registrationTextFields:{
        // flex:1,
        margin:20,
        paddingTop:10,
        borderBottomColor:'#0f0',
        borderBottomWidth:1
    },
    signUpArea: {
        margin:10,
    },
    inputArea:{
        marginTop:40
    }

})


export default RegistrationScreen;