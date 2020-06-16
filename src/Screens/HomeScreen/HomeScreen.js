import React from 'react';
import {View,Text, TextInput} from 'react-native';
import StyledButtonComponent from '../../Components/StyledButton/StyledButton';

const HomeScreen = (props) => {

    let userName = 'default User';
    let toName = 'default User2';
    return (
        <View>
            <StyledButtonComponent onPress={()=>{props.navigation.navigate("Location")}}>
                <Text>Location</Text>
            </StyledButtonComponent>
            <StyledButtonComponent onPress={()=>{props.navigation.navigate("Chat",{
                userName:userName,
                toName: toName
            })}}>
                <Text>Chat</Text>
            </StyledButtonComponent>
            <TextInput onChangeText={(text)=>{
                userName = text;
            }} placeholder={userName}></TextInput>
            <TextInput onChangeText={(text)=>{
                toName = text;
            }} placeholder={toName}></TextInput>
        </View>
    )


}

export default HomeScreen;