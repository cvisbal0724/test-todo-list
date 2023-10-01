import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { IButton } from "../../domain/interfaces/components/IButton";
import { $primary } from "../../domain/constants/Colors";

export const CustomButton = (props: IButton) => {

    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.label}</Text>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: $primary, 
        borderRadius: 20, 
        paddingVertical: 12, 
        paddingHorizontal: 24, 
        alignItems: 'center', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.3, 
        shadowRadius: 4, 
        elevation: 4, 
    },
    buttonText: {
        color: '#fff', 
        fontSize: 16, 
        fontWeight: 'bold', 
    },
});