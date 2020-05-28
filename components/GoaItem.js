import React from 'react';

import {TextInput,TouchableOpacity ,Text, View, StyleSheet} from 'react-native';

const GoalItem = props => {

    return (<TouchableOpacity activeOpacity={0.8} onPress={props.OneDelete.bind(this,props.id)}><Text style={styles.lsttxt}>{props.title}</Text></TouchableOpacity>);
}

const styles = StyleSheet.create({

    lsttxt:{
        padding:10,
        color: '#f1f1f1',
        backgroundColor: 'green',
        borderRadius:5,
        borderWidth:1,
        marginBottom:20,
        borderColor:'black',
    
    
        // fontFamily: 'Times New Roman',
    
      },

});

export default  GoalItem;