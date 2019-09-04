import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import  Name from './Name';

const Description =() =>{
    return(
        <View>
            <Text style={Style.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut.{"\n\n"}Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

            </Text>


        </View>
    )
}


const Style=StyleSheet.create({
    descriptionText:{
        letterSpacing:1.25,
        fontSize:18,
        paddingLeft:10,
        paddingTop:10,
        paddingRight:10,
        textAlign: 'center'
    }

})
export default  Description;
