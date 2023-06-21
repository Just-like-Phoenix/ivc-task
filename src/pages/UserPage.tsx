import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, getUserTodo } from "../api/users.service";
import { User } from "../types/User.type";
import {
  UserDiv,
  UserPageDiv,
  UserTodoDiv,
} from "../component/UserPage/StyledComponents";
import { Todo } from "../types/Todo.type";
import TableComponent from "../component/Table/TableComponent";
import { todoColumns } from "../component/UserPage/TableColumns";
import UserInfoComponent from "../component/UserPage/UserInfoComponent";

const UserPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<User>();
  const [todoData, setTodoData] = useState<Todo[]>([]);

  const getData = async () => {
    getUser(id?.toString())
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const getTodoData = async () => {
    getUserTodo(id?.toString())
      .then((response) => {
        setTodoData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getData();
    getTodoData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <UserPageDiv>
      <UserDiv>
        <UserInfoComponent
          name={data?.name}
          email={data?.email}
          phone={data?.phone}
          city={data?.address.city}
          street={data?.address.street}
          suite={data?.address.suite}
          geo={data?.address.geo}
        />
        <UserTodoDiv>
          <TableComponent data={todoData} columns={todoColumns} />
        </UserTodoDiv>
      </UserDiv>
    </UserPageDiv>
  );
};

export default UserPage;
