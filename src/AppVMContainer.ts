import {useState} from 'react';
import {createContainer} from 'unstated-next';

const AppVM = () => {
  const [visibility, setModalVisibility] = useState(false);
  const [tasks, setTasks] = useState([]);

  const show = () => {
    setModalVisibility(true);
  };

  const hide = () => {
    setModalVisibility(false);
  };

  const addTask = (task) => {
    tasks.push(task);
    setTasks(tasks);
  };

  return {visibility, show, hide, tasks, addTask};
};

export const AppVMContainer = createContainer(AppVM);
