import { getUsers } from "../api/users.service";
import { useEffect, useState } from "react";
import {
  HomeDiv,
  HomePageDiv,
  TableDiv,
} from "../component/HomePage/StyledComponents";
import { User } from "../types/User.type";
import TableComponent from "../component/Table/TableComponent";
import { usersColumns } from "../component/HomePage/TableColumns";

const HomePage = () => {
  const [data, setData] = useState<User[]>([]);

  const getData = async () => {
    getUsers()
      .then((response) => setData(response.data))
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <HomePageDiv>
      <HomeDiv>
        <TableDiv>
          <TableComponent data={data} columns={usersColumns} />
        </TableDiv>
      </HomeDiv>
    </HomePageDiv>
  );
};

export default HomePage;
