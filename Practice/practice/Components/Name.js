import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const Name = () =>{
    return (
        <View>
        <Text style={Style.ProfileName}>Prashant Basnet ,  20</Text>

            <View style={Style.iconRow}>
                <Image
                    style={Style.map}
                    source={{ uri: 'https://www.pinclipart.com/picdir/middle/46-460577_maps-vector-graphic-google-maps-icon-android-clipart.png'}}
                />
                <Text style={Style.locationName}> Hammond, Louisiana </Text>
            </View>

        </View>
    )
}

const Style=StyleSheet.create({
    ProfileName:{
        textShadowColor:'#000',
        fontSize:30,
        flexDirection: 'column',
        paddingLeft:10,
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    map: {

        marginTop:10,
        marginLeft:20,
        height: 40,
        width: 40,
        paddingLeft:50,
        justifyContent: 'center',
        alignSelf: 'flex-start',
        flexDirection: 'row',



    },
    locationName:{

        alignSelf: 'flex-end',
         flexDirection: 'row',
        paddingRight:100,
        paddingBottom:5,
        fontSize:17,

    },
    iconRow:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginLeft:30,
        marginRight:60,
        borderColor: '#D3D3D3',
        justifyContent:'center',
        flex:1,
        flexDirection:'row'
    }
})


export default Name;
