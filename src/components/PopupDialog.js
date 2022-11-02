import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, Modal, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Picker as SelectPicker } from '@react-native-picker/picker';
import { setModalVisible } from "../slices/PopupDialogSlice";

const PopupDialog = ({submitFunction,title}) => {

    const [selectedValue, setSelectedValue] = useState("1");
    const [array_of_items, setArrayOfItems] = useState([]);

    const dispatch = useDispatch();

    const { numberOfOptions, modalVisible } = useSelector(state => state.popupdialog);

    const create_selection_numbers = (selection_numbers,size) => {
        for (let i = 0; i < size; i++) {
            selection_numbers.push(i + 1);
        }
    };

    useEffect(() => {
        let selection_numbers = [];
        create_selection_numbers(selection_numbers,numberOfOptions);
        setArrayOfItems(selection_numbers.map((index) =>
            <SelectPicker.Item label={index.toString()} key={index} value={index} />,
        ));
    }, [numberOfOptions]);


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                dispatch(setModalVisible(!modalVisible));
                setSelectedValue("1");
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{title}</Text>
                    <SelectPicker
                        style={{ color: 'blue', placeholderTextColor: 'blue', width: 100 }}
                        prompt={"Please choose"}
                        itemStyle={{ backgroundColor: "grey", color: 'blue', fontFamily: "Ebrima", fontSize: 17 }}
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedValue(itemValue)}
                    >
                        {array_of_items}
                    </SelectPicker>

                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => 
                          {
                            dispatch(setModalVisible(true));
                            dispatch(submitFunction(Number(selectedValue)));
                            dispatch(setModalVisible(false));
                          }}
                    >
                        <Text style={styles.textStyle}>Submit</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>

    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        justifyContent:"center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#9e2b2b",
      },
      buttonClose: {
        backgroundColor: "#9e2b2b",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontSize:20,
        fontStyle:'bold',
        color:"#9e2b2b"
      },
      itemStyle: {
        fontSize: 15,
        height: 75,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
      }
});

export default PopupDialog;
