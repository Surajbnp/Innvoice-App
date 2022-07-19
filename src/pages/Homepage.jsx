import React from "react";

import { Table, Thead, Tr, Th, TableContainer } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "../redux/action";

const Homepage = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);


  console.log(users);


  return (
    <div>
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>E-mail</Th>
              <Th>Phone</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Homepage;
