import { SafeAreaView, Image, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks } from '../Redux_Toolkit/taskSlice';

export default function Home({ navigation }) {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.taskContainer}>
      {item.img && <Image source={{ uri: item.img }} style={{ width: 110, height: 110 }} />}
      <Text style={styles.taskText}>{item ? item.title : 'Loading...'}</Text>
      <Text style={styles.taskText}><Text style={{color:'orange'}}>$</Text>{item ? item.price : 'Loading...'}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>The world’s Best Bike</Text>
        <View style={styles.filterButtons}>
          <TouchableOpacity style={styles.filterButton}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text>Roadbike</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text>Mountain</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* FlatList sẽ chiếm phần không gian còn lại dưới header */}
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        ListEmptyComponent={<Text>No tasks available</Text>}
        style={styles.taskList}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Add')}>
        <Ionicons name="add" size={40} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,  // Thêm margin để tách khỏi FlatList
  },
  filterButton: {
    borderWidth: 1,
    borderColor: 'red',
    paddingHorizontal: 28,
    paddingVertical: 5,
    borderRadius: 6,
  },
  taskList: {
    flex: 1,
  },
  taskContainer: {
    width: '42%',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 10,
    margin: 15,
    borderRadius: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  taskText: {
    fontSize: 15,
    color: '#888',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#00bfa5',
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 450, // Chỉnh sửa vị trí của nút thêm
    right: 20,
  },
});
