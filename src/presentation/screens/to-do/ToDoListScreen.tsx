import React, { useRef, useState } from "react";
import { Alert, Text, TouchableHighlight, TouchableOpacity, View } from "react-native"
import { TaskContext } from '../../../domain/context/TaskContext';
import { Layout } from "../../components/Layout";
import { ToDoListStyles } from './../../styles/ToDoListStyle';
import { SwipeListView } from "react-native-swipe-list-view";
import { ButtonStyles } from "../../styles/ButtonStyle";
import { TaskEntity } from "../../../domain/entities/TaskEntity";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useIsFocused } from "@react-navigation/native";
import { CustomSearch } from "../../components/CustomSearch";
import { CustomFilterButton } from "../../components/CustomFilterButton";
import { DetailScreen } from "../tasks/DetailScreen";
import { $primary } from "../../../domain/constants/Colors";

export const ToDoListScreen = (props: any) => {

    const [data, setData] = useState<TaskEntity[]>();
    const [detail, setDatail] = useState<TaskEntity>();
    const [dataCache, setDataCache] = useState<TaskEntity[]>();
    const [searchValue, setSearchValue] = useState('');
    const { getAll, complete, remove, report } = React.useContext(TaskContext);
    const [completed, setCompleted] = useState('');
    const [totalTask, setTotalTask] = useState(0);
    const [totalCompleted, setTotalCompleted] = useState(0);
    const [totalNotCompleted, setTotalNotCompleted] = useState(0);
    const [lastTap, setLastTap] = useState<number>();
    const [isVisible, setIsVisible] = useState(false);
    const isFocused = useIsFocused();
    const refSwipe = useRef<SwipeListView<any>>(null)
    const statusTask = [{ label: `Completed(${totalCompleted})`, value: '1' }, { label: `Not Completed(${totalNotCompleted})`, value: '0' }, { label: `All(${totalTask})`, value: '2' }];

    const getAllTask = async (value: string = '') => {
        const result = await getAll({ completed: (value || completed) == '2' ? '' : (value || completed) });
        const rep = await report<any>();
        setData(result.data);
        setDataCache(result.data);
        setTotalTask(rep.data.total);
        setTotalCompleted(rep.data.totalCompleted);
        setTotalNotCompleted(rep.data.totalNotCompleted);
    }

    const toggleComplete = async (taskId: string, comp: boolean) => {
        try {
            await complete(taskId, !comp);
            await getAllTask();
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
        );
    }

    const searchTask = (text: string) => {
        setData(() => {
            return dataCache?.filter(item => item.name.toLowerCase().includes(text?.toLowerCase()) || item.description.toLowerCase().includes(text?.toLowerCase()));
        });
        setSearchValue(text);
    }

    const searchClean = () => {
        setData(() => {
            return dataCache;
        });
        setSearchValue('');
    }

    const filter = (value: string) => {
        setCompleted(value);
        getAllTask(value)
    }

    const showDetail = (data: TaskEntity) => {
        const now = Date.now();
        if (lastTap && now - lastTap < 300) {
            setDatail(data);
            setIsVisible(true);
        } else {
            setLastTap(now);
        }
    };

    const showEdit = (data: TaskEntity) => {
        props.navigation.navigate('EditTaskScreen', {data});
    };

    const closeModal = () => {
        setIsVisible(false);
    }

    React.useEffect(() => {
        const bootstrapAsync = async () => {
            await getAllTask();
            refSwipe.current?.closeAllOpenRows();
        };
        bootstrapAsync();
    }, [isFocused]);

    const renderItem = (data: { item: TaskEntity }) => (
        <TouchableHighlight style={{ backgroundColor: 'white', borderRadius: 8 }}
            onPress={() => showDetail(data.item)} delayLongPress={1000} onLongPress={() => deleteTask(data.item.id as string)}
            underlayColor="#eaeaea">
            <View style={[ToDoListStyles.taskContainer, ToDoListStyles.item]}>
                <View>
                    <Text style={ToDoListStyles.taskText}><Text style={{
                        fontWeight: 'bold'
                    }}>Task: </Text>#{data.item.id}</Text>
                    <Text style={ToDoListStyles.taskText}><Text style={{
                        fontWeight: 'bold'
                    }}>Name: </Text>{data.item.name}</Text>
                    <Text style={ToDoListStyles.taskText}>
                        <Text style={{
                            fontWeight: 'bold'
                        }}>Description:</Text> {data.item.description}</Text>
                    <Text style={{
                        fontWeight: 'bold'
                    }}>
                        Priority:
                        <Text style={[
                            { color: data.item.priority == 'high' ? 'red' : data.item.priority == 'medium' ? 'yellow' : 'green' }
                        ]}> {data.item.priority.toUpperCase()}</Text>
                    </Text>
                </View>
                <TouchableOpacity
                    style={[ToDoListStyles.completeButton, data.item.completed && ToDoListStyles.completedTask]}
                    onPress={() => toggleComplete(data.item.id as string, data.item.completed)}>
                    <Text style={[ToDoListStyles.completeButtonText, data.item.completed && ToDoListStyles.completeTaskColor]}>✓</Text>
                </TouchableOpacity>
            </View>
        </TouchableHighlight>
    );

    const renderHiddenItem = (data: { item: TaskEntity }) => (
        <View style={ButtonStyles.buttonFlexEnd}>
            <TouchableOpacity onPress={() => showEdit(data.item)}
                style={[{backgroundColor: $primary}, ButtonStyles.buttonSwipe]}>
                <Ionicons name="pencil" size={props.iconSize ?? 32} color={'white'} />
            </TouchableOpacity>
        </View>
    );

    return (
        <Layout>
            <CustomSearch onChangeText={searchTask} onCleanText={searchClean}
                value={searchValue}
                placeholder="Search task" />
            <CustomFilterButton items={statusTask}
                onPress={filter} default="2" />
            <SwipeListView data={data} 
                ref={refSwipe}
                renderItem={renderItem}
                renderHiddenItem={renderHiddenItem}
                rightOpenValue={-90}
                previewRowKey={"0"}
                previewOpenValue={-40}
                previewOpenDelay={1000}
                keyExtractor={item => item?.id as string} />
                <DetailScreen isVisible={isVisible} data={detail} closeModal={closeModal}/>
        </Layout>
    )

}
