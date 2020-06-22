import React, { useEffect, useState } from 'react';
import {View,Text} from 'react-native';
const LocationSceen = (props) =>{

    const [position,setPosition] = useState(null);
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
			position => {
				const location = JSON.stringify(position);
                setPosition(location);
				
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
    
            
    },[])



    return(
        <View>
            <Text>{position}</Text>
        </View>
    )


}



export default LocationSceen;
