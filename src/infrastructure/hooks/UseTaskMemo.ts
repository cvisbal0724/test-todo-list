import React from "react";
import { ITaskContext } from "../../domain/interfaces/ITaskContext";
import { TaskEntity } from "../../domain/entities/TaskEntity";


export const UseTaskMemo = () =>  {

 return React.useMemo(() => ({
    getAll: async (param: any): Promise<TaskEntity[]> => {
        return {} as any;
    },
    getById: async (id: string): Promise<TaskEntity> => {
        console.log({id});
        return {} as any;
    },
    create: async (entity: TaskEntity): Promise<TaskEntity> => {
        return {} as any;
    },
    update: async (id: string, entity: TaskEntity): Promise<TaskEntity> => {
        return {} as any;
    },
    delete: async (id: string): Promise<TaskEntity> => {
        return {} as any;
    }
  } as ITaskContext<TaskEntity>),
    []
  )

}
