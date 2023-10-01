import { StyleSheet, Text, TextInput, View } from "react-native";
import { IInputText } from "../../domain/interfaces/components/IInputText";

export const CustomInput = (props: IInputText) => {

return (
    <View>
        <Text style={styles.label}>
            {props.label}
        </Text>
        <View style={styles.container}>
        
        <TextInput
            ref={props.ref}
            style={styles.input}
            value={props.value}
            multiline={props.multiline}
            onChangeText={props.onChangeText}
        />
        {props.errorValidation ? <Text style={styles.labelError}>{props.errorMessage}</Text> : <></>}
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
      labelError: {
        fontSize: 12,
        color: 'red'
      },
  });