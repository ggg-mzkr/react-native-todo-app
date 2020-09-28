import React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import {AppVMContainer} from '../AppVMContainer';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    margin: 10,
    padding: 35,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonGroup: {
    marginTop: 20,
  },
  submitButton: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'yellow',
    borderRadius: 20,
    elevation: 2,
  },
  closeButton: {
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 20,
    elevation: 2,
  },
  textStyle: {
    textAlign: 'center',
  },
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

const TaskModal = () => {
  const container = AppVMContainer.useContainer();
  const [value, onChangeText] = React.useState('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={container.visibility}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text) => onChangeText(text)}
          />
          <View style={styles.buttonGroup}>
            <TouchableHighlight
              style={styles.submitButton}
              onPress={() => {
                container.addTask(value);
                container.hide();
              }}>
              <Text style={styles.textStyle}>登録</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.closeButton}
              onPress={container.hide}>
              <Text style={styles.textStyle}>閉じる</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskModal;
