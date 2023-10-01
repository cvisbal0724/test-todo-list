import React, { useEffect, useRef, useState } from "react";
import { Text, StyleSheet, Alert } from 'react-native';
import { Layout } from "../../components/Layout";
import { PRIORITY } from './../../../domain/types/Priority';
import { RadioButton } from 'react-native-paper';
import { CustomInput } from "../../components/CustomInput";
import { CustomDatePicker } from "../../components/CustomDatePicker";
import { TaskContext } from "../../../domain/context/TaskContext";
import { CustomButton } from "../../components/CustomButton";
import { $primary } from "../../../domain/constants/Colors";

export const CreateTaskScreen = (props: any) => {

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState<Date>(new Date());
  const [priority, setPriority] = useState<PRIORITY>('low');
  const [completed, setCompleted] = useState<boolean>(false);
  const [validateName, setValidateName] = useState(false);
  const [validateDescription, setValidateDescription] = useState(false);
  const { data } = props.route.params;
  const { create, update } = React.useContext(TaskContext);

  const handleSubmit = async () => {
    setValidateName(!name);
    setValidateDescription(!description);
    if (!name || !description)
      return false;

    let result;
    if (id) {
      result = await update(id, {
        name,
        description,
        completed,
        priority,
        dueDate
      });
    } else {
      result = await create({
        name,
        description,
        completed: false,
        priority,
        dueDate
      });
    }

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

  const fillData = () => {
    setId(data?.id);
    setName(data?.name);
    setDescription(data?.description);
    setDueDate(new Date(data?.dueDate));
    setCompleted(data?.completed);
    setPriority(data?.priority);
  }

  useEffect(() => {
    if (data && data.id) {
      fillData();
    }
  }, [])

  return (

    <Layout>

      <CustomInput errorValidation={validateName} label="Name *" value={name}
        onChangeText={(text) => setName(text)} errorMessage="Name is required"></CustomInput>

      <CustomInput errorValidation={validateDescription} multiline={true} label="Description *" value={description}
        onChangeText={(text) => setDescription(text)} errorMessage="Description is required"></CustomInput>

      <CustomDatePicker label="Due Date" value={dueDate} onChangeDate={(value) => setDueDate(value)} />

      <Text style={{ fontSize: 16 }}>Prioridad</Text>

      <RadioButton.Group onValueChange={(value) => setPriority(value as PRIORITY)} value={priority}>
        <RadioButton.Item label="High" color={$primary} value="high" />
        <RadioButton.Item label="Medium" color={$primary} value="medium" />
        <RadioButton.Item label="Low" color={$primary} value="low" />
      </RadioButton.Group>

      <CustomButton label={id ? "Edit Task" : "Create Task"} onPress={handleSubmit}></CustomButton>
    </Layout>
  );
}
