import { SafeAreaView,TextInput, Image, Button, View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'; 
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import 'react-native-gesture-handler'; 
import { addTask } from '../Redux_Toolkit/taskSlice';



export default function Add({ navigation}) {
    const dispatch = useDispatch();
    const tasks = useSelector(state=>state);
    const [newTask, setNewTask] = useState('');
    const [newPrice, setNewPrice] = useState('');

    const handleCheck = ()=>{
      if(newTask === '' || newPrice === ''){
        return (
          <View>
            <Text>
              Please input value!
            </Text>
          </View>
        )
      }
    }

    const handleAddTask = () => {
      const task = {
        title: newTask,
        img: "https://imgur.com/fRxe3lx.jpg",
        price: 1350
      }

      dispatch(addTask(task));
      setNewTask('');
      navigation.navigate('Home');
  };
   return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.addJobText}>Add Bike to Sell</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text>
          Title bike:
        </Text>
        <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Input your job"
          value={newTask}
          onChangeText={setNewTask}
        />
      </View>
      </View>
      <View style={styles.inputContainer}>
        <Text>
          Price bike:
        </Text>
        <View style={styles.textInputWrapper}>
        <TextInput
          style={styles.searchInput2}
          placeholder="Input your price"
          value={newPrice}
          onChangeText={setNewPrice}
        />
      </View>
      </View>
      <View style={styles.buttonContainer}>
     <TouchableOpacity style={styles.finishButton} onPress={handleAddTask}>
          <Text style={styles.finishText} onPress={()=>handleCheck}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.jobImage} source={{}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#f5f5f5',
  },
  addJobText: {
    textAlign: 'center',
    color: '#404040',
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  inputContainer: {
    width:'50%',
  },
  textInputWrapper: {
    borderWidth: 1, 
    borderColor: '#B0B0B0', 
    borderRadius: 5,
    marginBottom: 20,
    overflow: 'hidden',
  },
  searchInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchInput2: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finishButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E94141',
    width: 150,
    padding: 10,
    borderRadius: 9,
  },
  finishText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 5,
  },
  imageContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  jobImage: {
    width: 150,
    height: 150,
  },
});
