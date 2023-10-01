import { PRIORITY } from "../types/Priority";

export type TaskEntity = {
    id?: string; // Un identificador único para cada tarea
    name: string; // El nombre de la tarea
    description: string; // La descripción de la tarea
    completed: boolean; // Un indicador de si la tarea está completada o no
    dueDate: Date; // Una fecha límite para la tarea
    priority: PRIORITY; // La prioridad de la tarea
    created?: Date; // La fecha de creqcion
}