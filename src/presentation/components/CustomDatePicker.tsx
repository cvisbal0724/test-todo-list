import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { IDatePicker } from "../../domain/interfaces/components/IDatePicker";
import Ionicons from '@expo/vector-icons/Ionicons';
import { $primary } from "../../domain/constants/Colors";

export const CustomDatePicker = (props: IDatePicker) => {

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate;
        props.onChangeDate(currentDate);
    };

    const showMode = (currentMode: any) => {
        DateTimePickerAndroid.open({
            value: props.value,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (
        <View>
            <Text style={styles.label}>
                {props.label}
            </Text>
            <View style={styles.container}>
            <View style={styles.containerPicker}>
                <View style={styles.columnPicker}>
                    <TouchableOpacity onPress={showDatepicker} >
                        <Ionicons name="calendar-outline" size={props.iconSize ?? 32} color={props.iconColor ?? $primary} />
                    </TouchableOpacity>
                </View>
                <View style={styles.columnPicker}>
                    <Text>{props.value.toLocaleDateString()}</Text>
                </View>
            </View>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    input: {
        fontSize: 16,
        color: '#333',
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    containerPicker: {
        flexDirection: 'row', // Esto coloca las columnas una al lado de la otra
        justifyContent: 'space-between', // Esto separa las columnas de manera uniforme
        paddingHorizontal: 16, // Espacio horizontal para separación
    },
    columnPicker: {
        flex: 1,
        alignItems: 'flex-start', 
        justifyContent: 'center',
        verticalAlign: 'middle'
    },
});