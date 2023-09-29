import { TaskEntity } from "../../domain/entities/TaskEntity";
import { GenericRepository } from "./bases/GenericRepository";

export class TaskRepository extends GenericRepository<TaskEntity> {

    /**
     *
     */
    constructor() {
        super();    
        this._url = '';    
    }

}