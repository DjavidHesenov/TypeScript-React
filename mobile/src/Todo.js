import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

export const Todo = ({todo, onRemove }) => {



    const longPressHandler = () => {
        onRemove(todo.id)
    }


    return (
        <TouchableOpacity activeOpacity={0.4} onPress={() => console.log('pressed', todo.id)} onLongPress={onRemove.bind(null, todo.id)}>
            <View style={styles.todo}>
                <Text>{todo.title}</Text>
                <Text>{todo.description}</Text>
                <Text>Year: {todo.year}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
})