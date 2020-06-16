import React,{useEffect,useState} from 'react';
import { View,FlatList } from 'react-native';
import {DUMMYCHATS} from '../../DummyData/DUMMYCHATS';
import ChatBubble from '../../Components/ChatBubbles/ChatBubble';
import {GiftedChat} from 'react-native-gifted-chat';
import io from 'socket.io-client';
import {ChatSocketFactory} from '../../Utils/ChatSocket';

const ChatScreen = props => {
    const [messages,messageHandler] = useState([]);
    const {userName,toName} = props.route.params;
      
    useEffect(()=>{
      console.log('Connecting.......');
      ChatSocketFactory.initializeSocket('http://192.168.0.104:8080/?token=abc&userId='+userName);
      const socketClient = ChatSocketFactory.getSocket();
      socketClient.on('message',(receivedPayload)=>{
        console.log(receivedPayload.data.userId);
        console.log(receivedPayload.data.payload);
        
        
        
        messageHandler(previousState => {
          let message = GiftedChat.append(previousState,receivedPayload.data.payload); 
          return message;
        })
    

      })
      return () => {

        console.log('Disconnecting');
        ChatSocketFactory.disconnectSocket();
      }  

      }
    
    
    ,[])



    const onSend = (messages=[])=> {
      
      const socketClient = ChatSocketFactory.getSocket();   
      socketClient.emit('SEND_MESSAGE_TO_SOCKETID',{data:{
        userId:userName,
        eventname:"message",
        toId:toName,
        payload:messages[messages.length-1]
      }});
      
      
      messageHandler(previousState => {
          let message = GiftedChat.append(previousState,messages); 
          return message;
        })
      
    }

    return (
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: userName,
          avatar: 'https://placeimg.com/140/140/any',
          name:userName
        }}
      />

    )





}



export default ChatScreen;



