import React from 'react';
import {TouchableOpacity,StyleSheet,View} from 'react-native'


const StyledButtonComponent = (props) =>{

    return(
        <TouchableOpacity onPress={()=>{props.onPress()}}>
            <View style={styles.container} >
            {props.children}
            </View>
        </TouchableOpacity>
    )

}



const styles = StyleSheet.create ({
        container:{
            borderRadius:10,
            backgroundColor:'#ff00ff'
    
        }
        

    
});



export default StyledButtonComponent;