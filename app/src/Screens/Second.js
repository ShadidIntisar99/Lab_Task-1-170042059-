import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native'

const Second =()=>{
    const second = [{name:"SWE 4203",key:"1"}, {name:"CSE 4201",key:"2"}, {name:"CSE 4207",key:"3"}, {name:"HUM 4207",key:"4"}, {name:"MATH 4241",key:"5"}, {name:"SWE 4243",key:"6"},];
    return(
        <View style={styles.ViewStyle}>
           <FlatList
                data = {second}
                renderItem = {function({item}){
                    return <Text style ={styles.textStyle}> {item.name}</Text>;
                }}
           />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize:30,
            color:"blue",
            marginVertical:30,
        },
        ViewStyle:{
            borderColor:"red",
            borderWidth:5,
        } 
    }
);

export default Second;