import React from "react";
import { ITaskContext } from "../../domain/interfaces/context/ITaskContext";
import { TaskEntity } from "../../domain/entities/TaskEntity";
import { TaskRepository } from './../repositories/TaskRepository';

export const UseTaskMemo = () =>  {

 return React.useMemo(() => ({
    getAll: async (param: any) => {
        const objTask = new TaskRepository<TaskEntity[]>();
        return await objTask.getAll(param);
    },
    getById: async (id: string) => {
        const objTask = new TaskRepository<TaskEntity>();
        return await objTask.getById(id);
    },
    create: async (entity: TaskEntity) => {
        const objTask = new TaskRepository<TaskEntity>();
        return await objTask.create(entity);
    },
    update: async (id: string, entity: TaskEntity) => {
        const objTask = new TaskRepository<TaskEntity>();
        return await objTask.update(id, entity);
    },
    remove: async (id: string) => {
        const objTask = new TaskRepository<TaskEntity>();
        return await objTask.delete(id);
    },
    complete: async (id: string, completed: boolean) => {
        const objTask = new TaskRepository<TaskEntity>();
        return await objTask.complete(id, completed);
    },
  } as ITaskContext<TaskEntity>),
    []
  )

}
