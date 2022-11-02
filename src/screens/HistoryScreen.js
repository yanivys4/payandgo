import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker as SelectPicker } from '@react-native-picker/picker';

const HistoryScreen = () => {

    const [selectedValue, setSelectedValue] = useState("");
    const selection_numbers = [];
    const create_selection_numbers = (size) => {
        for (let i = 0; i < size; i++) {
            selection_numbers.push(i + 1);
        }
    };
    create_selection_numbers(3);
    const array_of_items = selection_numbers.map((index) =>
        <SelectPicker.Item label={index.toString()} key={index} value={index}/>,
    );

    return (
        <View style={{ flex: 1, padding: 0, margin: 0 }}>
            <SelectPicker
                style={{ color: 'blue', placeholderTextColor: 'blue' }}
                prompt={"Heloooooo"}
                itemStyle={{ backgroundColor: "grey", color: 'blue', fontFamily: "Ebrima", fontSize: 17 }}
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)}
            >
                {array_of_items}
            </SelectPicker>

            <Text style={{fontSize:20}}>{selectedValue}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default HistoryScreen;