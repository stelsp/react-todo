export interface ITodo {
  title: string;
  body: string;
  id: number;
  status: string;
}

export interface IData {
  todos: ITodo[];
  currentTodo: ITodo | null;
  handleSetCurrentTodo: (id: number) => void;
  handleAddFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDeleteClick: (id: number) => void;
  handleEditTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEditBodyChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleEditSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleStatusChange: (status: string) => void;
  filterInput: string;
  handleFilterInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IDataProvider {
  children: React.ReactNode;
}
