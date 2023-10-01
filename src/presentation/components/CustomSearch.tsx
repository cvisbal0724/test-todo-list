import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { $colorGray, $primary } from "../../domain/constants/Colors";
import { ISearch } from "../../domain/interfaces/components/ISearch";

export const CustomSearch = (props: ISearch) => {

    return (

        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={props.placeholder}
                placeholderTextColor="#888"
                onChangeText={props.onChangeText}
                value={props.value}
            />
            <TouchableOpacity onPress={props.onCleanText}>
                <Ionicons name="close-circle" size={30} color={'#727171'} />
            </TouchableOpacity>
        </View>

    );
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e1e1e1',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
        width: '90%'
    }
});
