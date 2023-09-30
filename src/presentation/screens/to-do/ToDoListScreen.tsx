import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native"
import { TaskContext } from '../../../domain/context/TaskContext';
import { Layout } from "../../components/Layout";
import { ToDoListStyles } from './../../styles/ToDoListStyle';
import { SwipeListView } from "react-native-swipe-list-view";
import { ButtonStyles } from "../../styles/ButtonStyle";
import { TaskEntity } from "../../../domain/entities/TaskEntity";
import Ionicons from '@expo/vector-icons/Ionicons';

export const ToDoListScreen = (props: any) => {

    const [data, setData] = useState<TaskEntity[]>();
    const { getAll, complete, remove } = React.useContext(TaskContext);

    const getAllTask = async () => {
        const result = await getAll({});
        setData(result.data);
    }

    const toggleComplete = async (taskId: string, completed: boolean) => {
        try {
            const result = await complete(taskId, !completed);
            await getAllTask();
            // refreshData(taskId, result.data);
        } catch (error) {
            console.log({ error });
        }
    };

    const deleteTask = async (itemId: string) => {
        Alert.alert(
            'Remove Task',
            `Do you want to remove task #${itemId}?`,
            [
                {
                    text: 'Yes', onPress: async () => {
                        await remove(itemId);
                        await getAllTask();
                    }
                },
                {
                    text: 'No',
                    onPress: () => console.log('No Pressed'),
                    style: 'cancel',
                },
            ],
            { cancelable: false }
            //clicking out side of alert will not cancel
        );
    }


    const refreshData = async (taskId: string, task: any) => {
        data?.map((obj: any, i: number) => {
            if (obj.id == taskId)
                data[i]['completed'] = task.completed;
        });
        setData([...data as any]);
    }

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            await getAllTask();
        };
        bootstrapAsync();
    }, []);

    const renderItem = (data: { item: TaskEntity }) => (
        <View style={[ToDoListStyles.taskContainer, ToDoListStyles.item]}>
            <Text style={ToDoListStyles.taskText}>{data.item.name}</Text>
            <Text style={ToDoListStyles.taskText}>{data.item.name}</Text>
            <TouchableOpacity
                style={[ToDoListStyles.completeButton, data.item.completed && ToDoListStyles.completedTask]}
                onPress={() => toggleComplete(data.item.id.toString(), data.item.completed)}>
                <Text style={[ToDoListStyles.completeButtonText, data.item.completed && ToDoListStyles.completeTaskColor]}>✓</Text>
            </TouchableOpacity>
        </View>
    );

    const renderHiddenItem = (data: { item: TaskEntity }) => (
        <View style={ButtonStyles.buttonFlexEnd}>
            <TouchableOpacity onPress={() => deleteTask(data.item.id.toString())}
                style={[ButtonStyles.buttonDanger, ButtonStyles.buttonSwipe]}>
                <Ionicons name="trash" size={props.iconSize ?? 32} color={'white'} />
            </TouchableOpacity>
        </View>
    );

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
