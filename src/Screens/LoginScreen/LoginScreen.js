import React from 'react';
import { View,Text, TextInput,StyleSheet, Button } from 'react-native';

const LoginScreen = (props) => {

    const goToSignUp = () => {

        // do sign up and navigate to login screen on successful sign up navigate to login Screen
        props.navigation.navigate('Registration');
    }

    const goToLoginPage = () => {
        // do successful login and go to Home page. It should start a new route from home page
        props.navigation.replace('Home');
    }


    return (<View style={styles.registrationContainer}>
        <Text style={styles.registrationHeader}>Login</Text>
        <View style={styles.inputArea}> 
            <TextInput style={styles.registrationTextFields} placeholder="Enter your EmailId"></TextInput>
            <TextInput style={styles.registrationTextFields} placeholder="Enter your password" secureTextEntry={true}></TextInput>
        </View>
        <View style={styles.signUpArea}>
           <View style={styles.btnStyles}>
                <Button title="LOGIN" onPress={goToLoginPage}></Button>
            </View>
            <View style={styles.btnStyles}>
                <Button style={styles.btnStyles} title="SIGN UP" onPress={goToSignUp}></Button>
            </View>
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
        flexDirection:'row',
        justifyContent:"center"
    },
    btnStyles:{
        flex:1,
        padding:10
    },
    inputArea:{
        marginTop:40
    }

})


export default LoginScreen;