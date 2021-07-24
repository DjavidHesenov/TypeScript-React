import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Navbar } from './src/NavBar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';
import Axios from 'axios';

export default function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
}, []);

const fetchTodos = async () => {
    try {
      let data = (await Axios.get('http://192.168.31.44:5000/api/todo')).data;
      console.log(data.todos);
      setTodos(data.todos)
    } catch (err) {
      console.error(err)
    }
  }

  const addTodo = (title) => {

    // setTodos(prev => [...prev, {
    //   id: Date.now().toString(),
    //   title
    // }])

  }

  const removeTodo = id => {
    // setTodos(prev => prev.filter( todo => todo.id !== id ))
  }

  return (
    <View>
      <Navbar title='CGS-Test-Camp-Task' />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
        keyExtractor={item => item._id.toString()} 
        data={todos}
        renderItem={({item}) => (
          <Todo todo={item} onRemove={removeTodo} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
