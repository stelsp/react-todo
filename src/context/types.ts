export interface ITodo {
  title?: string;
  body?: string;
  id?: number;
}
// export interface IData {
//   todos: ITodo[];
//   setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
//   currentTodo: ITodo;
//   setCurrentTodo: React.Dispatch<React.SetStateAction<ITodo>>;
// }
export interface IDataProvider {
  children: React.ReactNode;
}
