import React from 'react';
import { ITaskContext } from '../interfaces/ITaskContext';
import { TaskEntity } from '../entities/TaskEntity';

export const TaskContext = React.createContext({

} as ITaskContext<TaskEntity>);