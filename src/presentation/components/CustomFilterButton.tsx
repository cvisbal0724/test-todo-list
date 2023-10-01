import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { $primary } from "../../domain/constants/Colors";
import { IFilterButton } from "../../domain/interfaces/components/IFilterButton";
import { useEffect, useState } from "react";

export const CustomFilterButton = (props: IFilterButton) => {

    const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <View style={{ flexDirection: 'row' }}>
      {props.items?.map((x, i) => (
        <FilterButton
          text={x.label}
          id={x.value}
          selectedIndex={selectedIndex}
          callback={(id: any) => {
            setSelectedIndex(id);
            if (true) {
                props.onPress && props.onPress(id);
            }
          }}
        />
      ))}
    </View>
  );
   
}

const FilterButton = ({ callback, text, id, selectedIndex }: any) => {
    const clicked = selectedIndex === id;
    return (
      <TouchableOpacity
        style={[
            styles.activeButton,
            { backgroundColor: clicked ? $primary : 'white' }
        ]}
        onPress={() => {
          callback(id);
        }}>
        <Text style={{ color: clicked ? 'white' : $primary }}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    activeButton: {
        borderRadius: 20, 
        borderColor: $primary, 
        borderWidth: 2, 
        padding: 5,
        marginBottom: 5,
        marginRight: 4,
        minWidth: 60,
        alignItems: 'center'
    }
});