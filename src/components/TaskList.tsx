import React from 'react';
import {ScrollView, FlatList, StyleSheet} from 'react-native';

import TaskListItem from './TaskListItem';
import {AppVMContainer} from '../AppVMContainer';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
});

const TaskList = () => {
  const container = AppVMContainer.useContainer();
  return (
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic">
      <FlatList
        data={container.tasks}
        renderItem={({item}) => <TaskListItem title={item} />}
      />
    </ScrollView>
  );
};

export default TaskList;
