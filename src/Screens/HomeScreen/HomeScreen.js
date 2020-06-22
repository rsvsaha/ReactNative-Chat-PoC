import React, { useState, useEffect } from 'react';
import {View,Text, TextInput, StyleSheet,Dimensions} from 'react-native';
import StyledButtonComponent from '../../Components/StyledButton/StyledButton';
import ChatAvatar from '../../Components/ChatAvatar/ChatAvatar';

const HomeScreen = (props) => {

    const [userName,setUserName] = useState(null);
    const {userNameData,tokenData} = props.route.params;
        
    useEffect(()=>{
        
        setUserName(userNameData);
    },[]);
    
    return (
        <View style={styles.homeScreen}>
            
            <Text>{userName}</Text>
            <StyledButtonComponent onPress={()=>{props.navigation.navigate("Location")}}>
                <Text style={styles.btnStyle}>Location</Text>
            </StyledButtonComponent>
            <StyledButtonComponent onPress={()=>{props.navigation.navigate("ChatContacts",{
                userNameData:userName
            })}}>
                <Text>ChatPage</Text>
            </StyledButtonComponent>
            
        </View>
    )


}


const styles = StyleSheet.create({
    homeScreen:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        height:"100%",
        backgroundColor:"#0f0"
    },
    btnStyle:{
        alignItems:"center",
        justifyContent:"center",
        display:"flex"
    }



})


export default HomeScreen;

