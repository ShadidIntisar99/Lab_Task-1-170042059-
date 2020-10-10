import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native'

function ListScreen() {
    const faculty = [{ name: "Muhammad Mahbub Alam", key: "1" }, { name: "Mohayeminul Islam", key: "2" }, { name: "Tajkia Rahman Toma", key: "3" }, { name: "Hasanul Kabir", key: "4" }, { name: "Sabbir Ahmed", key: "5" },];
    return (
        <View style={styles.ViewStyle}>
            <FlatList
                data={faculty}
                renderItem={function ({ item }) {
                    return <Text style={styles.textStyle}> {item.name}</Text>;
                } } />
        </View>
    );
}

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

export default ListScreen;