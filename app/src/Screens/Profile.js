import React from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';

const Profile = () => {
    return (
        <View>
           <Image style ={styles.imagestyle}
            source={require('./../../assets/shadid.jpg')}
            />
            <Text style={styles.textStyle}>Name : Shadid Intisar Quasem</Text>
            <Text style={styles.textStyle}>ID : 170042059</Text>
            <Text style={styles.textStyle}>Room_no : 406S</Text>
            <Text style={styles.textStyle}>email : shadidintisar@iut-dhaka.edu</Text>
        </View>


    );
};
const styles = StyleSheet.create(
    {
        textStyle:{
            fontSize:30,
            color:"blue",
        },
        imagestyle:{
            height:200,
            width :150,
            resizeMode : 'stretch',
        }
    }
    );

export default Profile;
