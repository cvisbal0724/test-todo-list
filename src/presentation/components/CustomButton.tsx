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
        backgroundColor: $primary, // Color de fondo del botón
        borderRadius: 20, // Bordes redondeados
        paddingVertical: 12, // Espaciado vertical
        paddingHorizontal: 24, // Espaciado horizontal
        alignItems: 'center', // Alineación del contenido al centro
        shadowColor: '#000', // Color de la sombra
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra
        shadowOpacity: 0.3, // Opacidad de la sombra
        shadowRadius: 4, // Radio de la sombra
        elevation: 4, // Elevación para la sombra (Android)
    },
    buttonText: {
        color: '#fff', // Color del texto
        fontSize: 16, // Tamaño de fuente
        fontWeight: 'bold', // Peso de la fuente en negrita
    },
});