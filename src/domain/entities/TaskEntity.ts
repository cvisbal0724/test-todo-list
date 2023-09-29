import { PRIORITY } from "../types/Priority";

export class TaskEntity {
    private id: number; // Un identificador único para cada tarea
    private description: string; // La descripción de la tarea
    private isCompleted: boolean; // Un indicador de si la tarea está completada o no
    private dueDate?: Date; // Una fecha límite opcional para la tarea
    private priority: PRIORITY; // La prioridad de la tarea
    private tags: string[]; // Etiquetas asociadas a la tarea para clasificación

    constructor(
        id: number,
        description: string,
        isCompleted: boolean = false,
        dueDate?: Date,
        priority: PRIORITY = 'high',
        tags: string[] = []
      ) {
        this.id = id;
        this.description = description;
        this.isCompleted = isCompleted;
        this.dueDate = dueDate;
        this.priority = priority;
        this.tags = tags;
      }
}