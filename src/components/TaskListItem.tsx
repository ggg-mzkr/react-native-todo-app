import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

const styles = StyleSheet.create({
  item: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    height: 44,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
  },
});

const TaskListItem = ({title}) => {
  return (
    <Card>
      <Text style={styles.title}>{title}</Text>
    </Card>
  );
};

export default TaskListItem;
