import React,{useEffect,useState} from 'react';
import { View,FlatList } from 'react-native';
import {DUMMYCHATS} from '../../DummyData/DUMMYCHATS';
import ChatBubble from '../../Components/ChatBubbles/ChatBubble';
import {GiftedChat} from 'react-native-gifted-chat';


const ChatScreen = props => {

    const [messages,messageHandler] = useState([]);

    useEffect(()=>{

        messageList = [
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: 'React Native',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },...messages]
        messageHandler(messageList);
    },[])

    const onSend = (messages = [])=> {
        messageHandler(previousState => {
          return {messages: GiftedChat.append(previousState, messages)};
        })
      }

    return (
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />

    )





}

export default ChatScreen;