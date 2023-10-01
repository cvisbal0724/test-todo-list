import React, { useRef, useState } from "react";
import { Text, StyleSheet, Alert } from 'react-native';
import { Layout } from "../../components/Layout";
import { PRIORITY } from './../../../domain/types/Priority';
import { RadioButton } from 'react-native-paper';
import { CustomInput } from "../../components/CustomInput";
import { CustomDatePicker } from "../../components/CustomDatePicker";
import { TaskContext } from "../../../domain/context/TaskContext";
import { CustomButton } from "../../components/CustomButton";
import { $primary } from "../../../domain/constants/Colors";
import { IInputText } from "../../../domain/interfaces/components/IInputText";


export const CreateTaskScreen = (props: any) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState<Date>(new Date());
  const [priority, setPriority] = useState<PRIORITY>('low');
  const [validateName, setValidateName] = useState(false);
  const [validateDescription, setValidateDescription] = useState(false);
  const { create } = React.useContext(TaskContext);

  const handleSubmit = async () => {
    setValidateName(!name);
    setValidateDescription(!description);
    if (!name || !description) 
      return false;
    const result = await create({
      name,
      description,
      completed: false,
      priority,
      dueDate
    });    
    if (result.success) {
      Alert.alert('Success', result.message);
      resetFields();
      props.navigation.goBack();
    } else {
      Alert.alert('Error', 'The task could not be created.');
    }
  };

  const resetFields = () => {
    setName('');
    setDescription('');
    setDueDate(new Date());
    setPriority('low');
  }

  return (

    <Layout>

      <CustomInput errorValidation={validateName} label="Name *" value={name} 
      onChangeText={(text) => setName(text)} errorMessage="Name is required"></CustomInput>

      <CustomInput errorValidation={validateDescription}  multiline={true} label="Description *" value={description} 
      onChangeText={(text) => setDescription(text)} errorMessage="Description is required"></CustomInput>

      <CustomDatePicker label="Due Date" value={dueDate} onChangeDate={(value) => setDueDate(value)} />
     
      <Text style={styles.label}>Prioridad</Text>

      <RadioButton.Group onValueChange={(value) => setPriority(value as PRIORITY)} value={priority}>
        <RadioButton.Item label="High" color={$primary} value="high"/>
        <RadioButton.Item label="Medium" color={$primary} value="medium"/>
        <RadioButton.Item label="Low" color={$primary} value="low"/>
      </RadioButton.Group>

      <CustomButton label="Create Task" onPress={handleSubmit}></CustomButton>
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
