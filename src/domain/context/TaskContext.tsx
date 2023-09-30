import React from 'react';
import { ITaskContext } from '../interfaces/context/ITaskContext';
import { TaskEntity } from '../entities/TaskEntity';

export const TaskContext = React.createContext<ITaskContext<TaskEntity>>({} as any);