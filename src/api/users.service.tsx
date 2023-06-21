import axios from "axios";
import { User } from "../types/User.type";
import { Todo } from "../types/Todo.type";

export const getUsers = () => {
  return axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
};

export const getUser = (id: string | undefined) => {
  return axios.get<User>("https://jsonplaceholder.typicode.com/users/" + id);
};

export const getUserTodo = (id: string | undefined) => {
  return axios.get<Todo[]>(
    "https://jsonplaceholder.typicode.com/users/" + id + "/todos"
  );
};
