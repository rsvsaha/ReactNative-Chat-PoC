import React from 'react';
import {View,Text} from 'react-native';
import StyledButtonComponent from '../../Components/StyledButton/StyledButton';

const HomeScreen = (props) => {


    return (
        <View>
            <StyledButtonComponent onPress={()=>{props.navigation.navigate("Location")}}>
                <Text>Location</Text>
            </StyledButtonComponent>
            <StyledButtonComponent onPress={()=>{props.navigation.navigate("Chat")}}>
                <Text>Chat</Text>
            </StyledButtonComponent>
        </View>
    )


}

export default HomeScreen;