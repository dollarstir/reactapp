import React, {useState} from 'react';
import { StyleSheet, Text,ScrollView, View,TextInput,FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoaItem';
export default function App() {

  
 
  const [courseGoals,setCourseGoals] = useState([]);

  const [isAddMode, setIsAddMode] = useState(false);

  const goalInputHandler= (enteredText) => {
    setEnteredgoal(enteredText);

  };
  const addGoalHandler = goalTitle => { 

  // en setCourseGoals(currentGoal=>[...currentGoal,enteredgoal]);
   setCourseGoals(currentGoals => [...currentGoals,
    {id :Math.random().toString(), value: goalTitle}
    ]);

    setIsAddMode(false);
}; 

const removeGoalHandler = goalId => {
  setCourseGoals(currentGoals => {
    return currentGoals.filter((goal) => goal.id != goalId);
  });
};


const cancelAddGoalHandler = () => {
  setIsAddMode(false)
};
  
  return (
    
    <View style={styles.root}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler}  onCancel={cancelAddGoalHandler}/>

      <FlatList style={styles.showview}
        keyExtractor ={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem id ={itemData.item.id} OneDelete={removeGoalHandler} title={itemData.item.value}/>}
        
      />
     
    </View>
  );
}

const styles = StyleSheet.create({

  root:{
    padding: 50

  },

  
  showview:{
    padding:30,
    marginTop:20,
    // marginLeft:-10,
    backgroundColor: '#116699',
    shadowColor:'black',
    shadowRadius:5,
    color: '#f1f1f1',
    width: '100%', 
    borderRadius:10,
    marginBottom:10,
  },
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

