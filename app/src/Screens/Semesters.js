import React from 'react';
import {Text, View, StyleSheet,Button} from 'react-native';

const Semesters = (props) => {
    return (
        <View>
            <Button
                title="1st"
                onPress={function () {
                    props.navigation.navigate("First");
                } } />
            <Button
                title="2nd"
                onPress={function () {
                    props.navigation.navigate("Second");
                } } />
            <Button
                title="3rd"
                onPress={function () {
                    props.navigation.navigate("Third");
                } } />
        </View>

    );
};

export default Semesters;