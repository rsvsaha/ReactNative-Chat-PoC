import React from 'react';
import { View,StyleSheet,Text} from 'react-native';

const ChatBubble = props => {
    return (
        <View style={styles.chatBubble}>
            <Text>{props.message}</Text>
        </View>
    )

}

export default ChatBubble;

const styles = StyleSheet.create({
    chatBubble:{
        backgroundColor:'#ccc'
    }



});