import io from 'socket.io-client';


export const ChatSocketFactory = (() =>{
    var ChatSocketClient = null;

    return {
        initializeSocket : (url) => {
            ChatSocketClient = io(url);
        },
        disconnectSocket : () => {
            if(ChatSocketClient !== null){
                ChatSocketClient.disconnect();
                ChatSocketClient = null;
            }
        },
        getSocket : () => {
            return ChatSocketClient;
        }

    }




})()