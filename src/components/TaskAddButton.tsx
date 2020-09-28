import React from 'react';
import ActionButton from 'react-native-action-button';

import {AppVMContainer} from '../AppVMContainer';

const TaskAddButton = () => {
  const container = AppVMContainer.useContainer();
  return (
    <ActionButton buttonColor="rgba(231,76,60,1)" onPress={container.show} />
  );
};

export default TaskAddButton;
