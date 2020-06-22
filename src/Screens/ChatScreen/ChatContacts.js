import React from 'react';
import {FlatList,View,Image, StyleSheet, ImageBackground} from 'react-native';
import {DummyContacts} from '../../DummyData/DUMMYCONTACTS';
import ChatAvatar from '../../Components/ChatAvatar/ChatAvatar';

const ChatContacts = (props) => {

    const {userNameData} = props.route.params;
    
    const navigateToChatScreen = (chatId) =>{
        props.navigation.navigate("Chat",{
            userName:userNameData,
            toName: chatId
        })
    }

    return(
        <View style={styles.container}>
        <Image style={{height: '100%', width: '100%', position:'absolute'}} source={require('../../Images/starry-sky-998641.jpg')} />
        <FlatList
        data={DummyContacts}
        renderItem={({ item }) => <ChatAvatar onPress={(chatId)=>{
            navigateToChatScreen(chatId);
        }} chatId={item.id} chatAvatarUri={item.imagesrc} 

        chatTitle={item.name} chatMessage={item.message}/>}
        keyExtractor={item => item.id}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      }
})



export default ChatContacts;