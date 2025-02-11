export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  status: TodoStatus;
  userId?: number;
  metadata?: any;
}

export interface TodoWithMetadata extends Todo {
  metadata: any;
}

export interface User {
  id: number;
  name: string;
  email?: string;
  readonly todos: ReadonlyArray<Todo>;
}

export interface Project {
  id: number;
  name: string;
  users: User[];
  todos: Todo[];
}

export enum TodoStatus {
  Pending = "Pending",
  InProgress = "InProgress",
  Completed = "Completed",
}
