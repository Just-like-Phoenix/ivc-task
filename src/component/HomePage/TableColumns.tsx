import { createColumnHelper } from "@tanstack/react-table";
import { User } from "../../types/User.type";
import { Link } from "react-router-dom";
import { Button } from "../Table/StyledComponents";

const columnHelper = createColumnHelper<User>();

export const usersColumns = [
  columnHelper.accessor("name", {
    header: () => "Имя",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("email", {
    header: () => "Email",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("phone", {
    header: () => "Телефон",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("address", {
    header: () => "Адресс",
    cell: (info) =>
      info.renderValue()?.city +
      ", " +
      info.renderValue()?.street +
      ", " +
      info.renderValue()?.suite,
  }),
  columnHelper.accessor("company.name", {
    header: () => "Название компании",
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor("id", {
    header: () => "Перейти",
    cell: (info) => (
      <Link
        style={{ textDecoration: "none" }}
        to={"/user/" + info.renderValue() + ""}
      >
        <Button>Перейти</Button>
      </Link>
    ),
  }),
];
