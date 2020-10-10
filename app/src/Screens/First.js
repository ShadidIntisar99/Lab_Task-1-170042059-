import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native'

const First =()=>{
    const first = [{name:"SWE 4103",key:"1"}, {name:"CSE 4101",key:"2"}, {name:"CSE 4107",key:"3"}, {name:"HUM 4107",key:"4"}, {name:"MATH 4141",key:"5"}, {name:"SWE 4143",key:"6"},];
    return(
        <View style={styles.ViewStyle}>
           <FlatList
                data = {first}
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

export default First;