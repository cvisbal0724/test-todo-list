import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { IDatePicker } from "../../domain/interfaces/components/IDatePicker";
import { SafeAreaView } from "react-native-safe-area-context";

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
                <SafeAreaView>
                    <Button onPress={showDatepicker} title="Show date picker!" />
                    <Button onPress={showTimepicker} title="Show time picker!" />
                    <Text>selected: {props.value.toLocaleString()}</Text>
                </SafeAreaView>

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
});