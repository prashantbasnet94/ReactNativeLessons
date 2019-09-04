import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const Rating = () =>{
    return (
        <View>


            <View style={Style.iconRow}>
                <Image
                    style={Style.map}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/3_stars.svg/1024px-3_stars.svg.png'}}
                />
                <Text style={Style.locationName}> 3 </Text>
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
        marginLeft:30,
        height: 30,
        width: 200,
        paddingLeft:50,
        justifyContent: 'center',




    },
    locationName:{

        alignSelf: 'flex-end',
        flexDirection: 'row',
        paddingRight:100,
       justifyContent:'center',
        fontSize:17,
        fontWeight: 'bold',


    },
    iconRow:{
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginLeft:50,
        marginTop:10,
        marginRight:50,
        borderColor: '#D3D3D3',
        justifyContent:'center',
        flex:1,
        flexDirection:'row',
        paddingLeft:20,
        paddingBottom:10
    }
})


export default Rating;
