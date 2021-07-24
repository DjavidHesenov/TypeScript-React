import React, { useState } from 'react'
import { View, StyleSheet, TextInput, Button, Modal, Text } from 'react-native'
import CheckBox, { CheckBoxBase } from '@react-native-community/checkbox'
import { Formik } from 'formik'


export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [toggleCheckBoxPublic, setToggleCheckBoxPublic] = useState(false)
    const [toggleCheckBoxCompleted, setToggleCheckBoxCompleted] = useState(false)

    const pressHandler = () => {
        isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
        // if (value.trim()) {
        //     onSubmit(value)
        //     setValue('')    
        // } else {
        //     Alert.alert('Name cannot be empty')
        // }
    }


    return (
        <View style={styles.block}>
            <Button title="Add" onPress={pressHandler} />
            <Modal visible={isModalOpen} animationType='slide'>
                <View style={styles.formModal}>
                    <Button title="Close" onPress={pressHandler} />
                    <Formik
                        initialValues={{ title: '', description: '', year: '', isPublic: false, completed: false }}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >
                        {(props) => (
                            <View style={styles.inputView}>
                                <TextInput placeholder="Title" onChangeText={props.handleChange('title')} value={props.values.title} style={styles.inputForm} />
                                <TextInput placeholder="Description" onChangeText={props.handleChange('description')} value={props.values.description} multiline style={styles.inputForm}/>
                                <TextInput placeholder="Year" onChangeText={props.handleChange('year')} value={props.values.year} keyboardType="numeric" style={styles.inputForm} />
                                <Text style={styles.inputLabel} >Public</Text>
                                <CheckBox
                                    disabled={false}
                                    value={toggleCheckBoxPublic}
                                    onValueChange={() => toggleCheckBoxPublic ? setToggleCheckBoxPublic(false) : setToggleCheckBoxPublic(true)}
                                />
                                <Text style={styles.inputLabel} >Completed</Text>
                                <CheckBox
                                    
                                    disabled={false}
                                    value={toggleCheckBoxCompleted}
                                    onValueChange={() => toggleCheckBoxCompleted ? setToggleCheckBoxCompleted(false) : setToggleCheckBoxCompleted(true)}
                                />
                                <Button title='submit' onPress={props.handleSubmit}/>
                            </View>
                        )}
                    </Formik>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        padding: 10,
        width: '80%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    },
    formModal: {
        height: '100%',
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputForm: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 10
    },
    inputView: {
        width: '90%'
    },
    inputLabel: {
        fontSize: 20
    }
})