import React from 'react';
import {View, Text,StyleSheet,FlatList} from 'react-native';
import Header from '../Components/Header';


const array=[
    //one way to add the key is to allocate it inside the data to be passed
    // {name:'prashant Basnet', key:'1'},
    // {name:'basnet prashant',key:'2'},
    // {name:'prashant Basnet',key:'3'},
    // {name:'basnet prashant',key:'4'},
    // {name:'prashant Basnet',key:'5'},
    // {name:'basnet prashant',key:'6'},
     {name:'prashant Basnet1'},
    {name:'basnet prashant2'},
    {name:'prashant Basnet3'},
    {name:'basnet prashant4'},
    {name:'prashant Basnet5'},
    {name:'basnet prashant6'},
    ]




const  ListAView = () => {
    return(

        <FlatList
            //another way to pass the key is to implement keyExtractor
            keyExtractor={(name)=>name.name}
            data={array}
            renderItem={
                ({item})=>{
                    return <Text style={Style.ListItem}>{item.name}</Text>
                    }
            }
        />
    );
}

const Style =StyleSheet.create({
    ListItem :{
        height:50,
        width:300,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderTopColor:'#000',
        borderBottomColor:'#000'
    }

})
export default ListAView;
