 import React, {useState} from 'react';
 import { StyleSheet, Text,ScrollView, View,TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal,setEnteredgoal] = useState('');
    const goalInputHandler= (enteredText) => {
        setEnteredgoal(enteredText);
    
      };

    const addGoalhandler =  () =>{

        props.onAddGoal(enteredGoal);
        setEnteredgoal('');



    };

   

    return (<Modal visible={props.visible} animationType="slide"><View style={styles.inputview}>
    <TextInput placeholder="Add to do" style={styles.textinput} 
    
     onChangeText={goalInputHandler}
     value={enteredGoal}
    />


    
  
    <View style={styles.btnViews}>
      <View style={styles.sss}><Button title="Cancel" color="red"  onPress={props.onCancel} /></View>  

     <View style={styles.sss}><Button title="Add" style={styles.subbtn} onPress={addGoalhandler}/></View>   
        
        
        
     </View>
     
     
            
  </View>
  </Modal>
    );


};

const styles = StyleSheet.create({
    inputview:{

        flex:1, 
        justifyContent: "center",
        alignItems: 'center'
      },
    
    
      textinput: {
    
        borderRadius:10,
        borderColor: 'black',
        borderBottomColor:'black', 
        borderWidth: 1, 
        padding:10, 
        width:230,
        marginRight:10,
        marginBottom:10,
        
    
      },
      subbtn:{
       
    
      },

      btnViews :{
        flexDirection:"row", 
        justifyContent: "space-around",
        width: '60%',
        marginTop: 20,
      },

      sss:{
          width: '40%',
      },

});

export default GoalInput;