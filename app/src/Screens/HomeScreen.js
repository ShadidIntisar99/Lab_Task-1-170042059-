import React from 'react';
import {Text, StyleSheet, View, Button, Image, TouchableOpacity} from 'react-native'

function HomeScreen(props) {

    return (
        <View>
            <Text style={styles.textStyle}>HomeScreen</Text>
            <Image style ={styles.imagestyle}

                source={require('./../../assets/iutlogo.jpg')} />
            <TouchableOpacity
                onPress={function () {
                    props.navigation.navigate("Profile");
                } }
            >
                <Text>Profile</Text>
            </TouchableOpacity>
            <Text style={styles.textStyle}>Department : CSE</Text>
            <Text style={styles.textStyle}>Programme : SWE</Text>
            <Button
                title="List of Faculty Members"
                color="#00A2FF"
                onPress={function () {
                    props.navigation.navigate("List");
                } } />
            <Button
                title="Semesters"
                onPress={function () {
                    props.navigation.navigate("Semesters");
                } } />


        </View>

    );
}

const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize:30,
            color:"blue",
        },
        imagestyle:{
            height:100,
            width :100,
        }
    }


);

export default HomeScreen;