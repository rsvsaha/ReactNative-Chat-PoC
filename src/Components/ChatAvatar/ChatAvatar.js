import React from 'react';
import { View,Image,StyleSheet,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ChatAvatar = (props) =>{
    
    return (
        <TouchableOpacity onPress={()=>{
            props.onPress(props.chatId)
        }}>
    <View style={styles.chatContainer}>
        <View style={styles.avatarContainer}>
        <Image source={{uri: props.chatAvatarUri}}
       style={styles.circleImage}/>
       </View>
       <View style={styles.chatMessageArea}>
         <Text numberOfLines={1} style={styles.contactNameStyle}>{props.chatTitle}</Text>  
        <Text numberOfLines={1} style={styles.contactMessageStyle}>{props.chatMessage}
        </Text>
       </View>
    </View>
    </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    circleImage:{
        width:65,
        height:65,
        borderRadius:65,
        
    },
    avatarContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
            
    },

    chatContainer:{
        display:"flex",
        flexDirection:"row",
        borderWidth:1,
        borderColor:"#000",
        height:70,
        marginHorizontal:8,
        marginVertical:8
    },
    chatMessageArea:{
        flex:4,
        padding:5,
        justifyContent:"center",
        alignItems:"flex-start",
        
    },
    contactNameStyle:{
        fontSize:20,
        color:'#fff',
        
    },
    contactMessageStyle:{
        fontSize:15,
        color:'#fff',
    }
})





export default ChatAvatar;

