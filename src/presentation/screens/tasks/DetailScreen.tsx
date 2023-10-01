import React, { useEffect, useRef, useState } from "react";
import { Text, StyleSheet, Alert, Modal, TouchableOpacity, View, Pressable } from 'react-native';
import { PRIORITY } from '../../../domain/types/Priority';
import { $primary } from "../../../domain/constants/Colors";
import { ToDoListStyles } from "../../styles/ToDoListStyle";

export const DetailScreen = ({ isVisible, closeModal, data }: any) => {

    const [id, setId] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [dueDate, setDueDate] = useState<Date>();
    const [completed, setCompleted] = useState<boolean>();
    const [priority, setPriority] = useState<PRIORITY>();
    const [created, setCreated] = useState<Date>();

    const fillData = () => {
        setId(data?.id);
        setName(data?.name);
        setDescription(data?.description);
        setDueDate(data?.dueDate);
        setCompleted(data?.completed);
        setPriority(data?.priority);
        setCreated(data?.created);
    }

    useEffect(() => {
        fillData();
    });

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Task Detail</Text>
                    <View style={{ alignItems: 'flex-start', height: '80%' }}>
                        <Text style={styles.modalTextNormal}><Text style={styles.modalText}>Task: </Text>#{id}</Text>
                        <Text style={styles.modalTextNormal}><Text style={styles.modalText}>Name: </Text>{name}</Text>
                        <Text style={styles.modalTextNormal}>
                            <Text style={styles.modalText}>Description:</Text> {description}</Text>
                        <Text style={styles.modalTextNormal}>
                            <Text style={styles.modalText}>Is Completed:</Text> {completed ? 'Yes' : 'No'}</Text>
                        <Text style={styles.modalText}>
                            Priority:
                            <Text style={[
                                { color: priority == 'high' ? 'red' : priority == 'medium' ? 'yellow' : 'green' }
                                , styles.modalTextNormal]}> {priority?.toUpperCase()}</Text>
                        </Text>
                        <Text style={ToDoListStyles.taskText}>
                            <Text style={styles.modalText}>Created At:</Text> {created?.toString()}</Text>

                    </View>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={closeModal}>
                        <Text style={styles.textStyle}>Close</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalContent: {
        height: 380,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 100
    },
    buttonClose: {
        backgroundColor: $primary
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalTextNormal: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: 'normal',
    }
});  
