import { StyleSheet } from "react-native";
import { $primary } from "../../domain/constants/Colors";

export const ToDoListStyles = StyleSheet.create({
    taskContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#ccc'
    },
    taskText: {
        fontSize: 14,
        flexWrap: 'wrap',
        flexDirection: 'column',
        flex: 0.3,
    },
    completeButton: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    completedTask: {
        backgroundColor: $primary,
        borderColor: $primary,
        color: '#fff',
    },
    completeTaskColor: {
        color: '#fff',
    },
    completeButtonText: {
        fontSize: 18,
        color: '#333',
    },
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        padding: 16,
    },
    item: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    itemText: {
        fontSize: 18,
        color: '#333',
    },
});
