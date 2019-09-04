import React from 'react';
import {Text,ScrollView,Image, StyleSheet} from 'react-native';
import Header from './Header';
import Name from './Name';
import Rating from './Rating';
import Description from './Description';
const account = {
    'firstLine':"Getting started with React Native!",
    'name':"Prahant Basnet"
};

const Assignment = ()=>{
    return(
        <ScrollView style={Styles.width}>
            <Header/>
            <Image style={Styles.imageStyle}
                   source={{ uri: 'https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-1/p320x320/38202826_1011455045703788_8844553142503735296_n.jpg?_nc_cat=105&_nc_oc=AQm2QQR-5ri6ZdSwT4G0dIWa5xj5Mi8kX7VJ-_NOZe5LbmaC9xaf3fWorLyZ255RfHnRviRwPnJ5yj34Zu4j5y-l&_nc_ht=scontent-dfw5-1.xx&oh=8d118d201dbd11f75e6bab83b31fed96&oe=5DF9D6D4'}}
            />
            <Name/>
            <Description/>
            <Rating/>
            <Description/>
        </ScrollView>

    )
}

const Styles= StyleSheet.create({
    firstLine: {
        fontSize:30
    },
    width:{
        width: '100%',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
        paddingBottom:10

    },
    nameStyle:{
        fontSize:15
    },
    imageStyle: {

        height: 300,
        width: null,
    },
})
export default  Assignment;
