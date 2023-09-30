import React, { useState } from "react";
import { View, Text, TextInput, Switch, Button, StyleSheet } from 'react-native';
import { Layout } from "../../components/Layout";
import { PRIORITY } from './../../../domain/types/Priority';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RadioButton } from 'react-native-paper';
import { CustomInput } from "../../components/CustomInput";
import { CustomDatePicker } from "../../components/CustomDatePicker";


export const CreateTaskScreen = (props: any) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [dueDate, setDueDate] = useState<Date>(new Date());
  const [priority, setPriority] = useState<PRIORITY>('low');

  const handleDateSelection = async () => {
    try {
      // const { action, year, month, day } = await DatePickerAndroid.open({
      //   date: dueDate || new Date(),
      // });

      // if (action !== DatePickerAndroid.dismissedAction) {
      //   const selectedDate = new Date(year, month, day);
      //   setDueDate(selectedDate);
      // }
    } catch (error) {
      // console.warn('Error al abrir el selector de fecha:', error.message);
    }
  };

  const handleSubmit = () => {
    console.log('Descripción:', description);
    console.log('Completada:', isCompleted);
    console.log('Fecha límite:', dueDate);
    console.log('Prioridad:', priority);
  };

  return (
    
    <Layout>


      <CustomInput label="Name" value={name} onChangeText={(text) => setName(text)}></CustomInput>

      <CustomInput multiline={true} label="Description" value={description} onChangeText={(text) => setDescription(text)}></CustomInput>

<CustomDatePicker label="Due Date" value={dueDate} onChangeDate={(value) => setDueDate(value)}/>
      {/* <View style={styles.dateContainer}>
        <Text style={styles.label}>Due Date</Text>
        <Button title="Seleccionar Fecha" onPress={handleDateSelection} />
        {dueDate && <Text>{dueDate.toDateString()}</Text>}
      </View> */}

      <Text style={styles.label}>Prioridad</Text>

      <RadioButton.Group onValueChange={(value) => setPriority(value as PRIORITY)} value={priority}>
        <RadioButton.Item label="High" value="high" />
        <RadioButton.Item label="Medium" value="medium" />
        <RadioButton.Item label="Low" value="low" />
      </RadioButton.Group>

      <Button title="Guardar Tarea" onPress={handleSubmit} />
    </Layout>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  dateContainer: {
    marginBottom: 16,
  },
});
