import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native'

const Third =()=>{
    const third = [{name:"SWE 4303",key:"1"}, {name:"CSE 4301",key:"2"}, {name:"CSE 4307",key:"3"}, {name:"HUM 4307",key:"4"}, {name:"MATH 4341",key:"5"}, {name:"SWE 4343",key:"6"},];
    return(
        <View style={styles.ViewStyle}>
           <FlatList
                data = {third}
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

export default Third;