import { createColumnHelper } from "@tanstack/react-table";
import { Todo } from "../../types/Todo.type";

const columnHelper = createColumnHelper<Todo>();

export const todoColumns = [
  columnHelper.accessor("title", {
    header: () => "Задание",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("completed", {
    header: () => "Статус",
    cell: (info) =>
      info.renderValue() === true ? "Выполненно" : "Не выполненно",
  }),
];
