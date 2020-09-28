import React from 'react';
import TaskList from './components/TaskList';
import TaskModal from './components/TaskModal';
import {AppVMContainer} from './AppVMContainer';

import {View, StyleSheet} from 'react-native';
import TaskAddButton from './components/TaskAddButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const App = () => {
  return (
    <AppVMContainer.Provider>
      <View style={styles.container}>
        <TaskModal />
        <TaskList />
        <TaskAddButton />
      </View>
    </AppVMContainer.Provider>
  );
};

export default App;
