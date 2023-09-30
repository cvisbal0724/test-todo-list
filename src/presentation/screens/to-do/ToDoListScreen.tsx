import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { TaskContext } from '../../../domain/context/TaskContext';
import { Layout } from "../../components/Layout";
import { ToDoListStyles } from './../../styles/ToDoListStyle';
import { SwipeListView } from "react-native-swipe-list-view";
import { ButtonStyles } from "../../styles/ButtonStyle";

const data = [
    { id: '1', text: 'Comprar leche', completed: false },
    { id: '2', text: 'Hacer ejercicio', completed: false },
    { id: '3', text: 'Leer un libro', completed: true },
    { id: '4', text: 'Comprar leche', completed: false },
    { id: '5', text: 'Hacer ejercicio', completed: false },
    { id: '6', text: 'Leer un libro', completed: true },
    { id: '7', text: 'Comprar leche', completed: false },
    { id: '8', text: 'Hacer ejercicio', completed: false },
    { id: '9', text: 'Leer un libro', completed: true },
    { id: '10', text: 'Comprar leche', completed: false },
    { id: '11', text: 'Hacer ejercicio', completed: false },
    { id: '12', text: 'Leer un libro', completed: true },
    { id: '13', text: 'Comprar leche', completed: false },
    { id: '14', text: 'Hacer ejercicio', completed: false },
    { id: '15', text: 'Leer un libro', completed: true },
    { id: '16', text: 'Comprar leche', completed: false },
    { id: '17', text: 'Hacer ejercicio', completed: false },
    { id: '18', text: 'Leer un libro', completed: true },
    { id: '19', text: 'Comprar leche', completed: false },
    { id: '20', text: 'Hacer ejercicio', completed: false },
    { id: '21', text: 'Leer un libro', completed: true },
    // Agrega más tareas según sea necesario
];

export const ToDoListScreen = (props: any) => {

    const { getById } = React.useContext(TaskContext);

    React.useEffect(() => {
        const bootstrapAsync = async () => {
        };
        bootstrapAsync();
    }, []);

    const renderItem = ({ item }: any) => (
        <View style={[ToDoListStyles.taskContainer, ToDoListStyles.item]}>
            <Text style={ToDoListStyles.taskText}>{item.text}</Text>
            <TouchableOpacity
                style={[ToDoListStyles.completeButton, item.completed && ToDoListStyles.completedTask]}
                onPress={() => toggleComplete(item.id)}>
                <Text style={ToDoListStyles.completeButtonText}>✓</Text>
            </TouchableOpacity>
        </View>
    );

    const renderHiddenItem = ({ item }: any) => (
        <View style={ButtonStyles.buttonFlexEnd}>
            <TouchableOpacity
                style={[ButtonStyles.buttonDanger, ButtonStyles.buttonSwipe]}
            >
                <Text style={{ color: 'white' }}>Borrar</Text>
            </TouchableOpacity>
        </View>
    );

    const handlePress = (itemId: string) => {
        // Maneja la prensa del elemento aquí
        console.log(`Elemento presionado con ID: ${itemId}`);
    };


    const toggleComplete = (taskId: string) => {
        // Implementa la lógica para marcar una tarea como completada aquí
    };

    return (
        <Layout>
            
            <SwipeListView data={data} 
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-90}
                previewRowKey={"0"}
                previewOpenValue={-40}
                previewOpenDelay={1000}
                keyExtractor={item => item.id.toString()} />
           
        </Layout>
    )

}
