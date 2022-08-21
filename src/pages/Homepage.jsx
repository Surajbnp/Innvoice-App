import React, { useState } from "react";

import { Table, Thead, Tr, Th, TableContainer, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {  loadBill, loadCart, loadUser } from "../redux/action";
import Card from "../components/Card";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const users = useSelector((state) => state.users);
  let val = localStorage.getItem("mode")
  const [mode, setMode] = useState(val);
  const token = localStorage.getItem("token");

  if(token === null){
    navigate('/login')
  }



  if (mode !== undefined) {
    localStorage.setItem("mode", mode);
  }

  const handleMode = (e) => {
    setMode(e.target.value);
  };

  useEffect(() => {
    dispatch(loadCart())
  },[dispatch])

  useEffect(() => {
    dispatch(loadBill())
  },[dispatch])

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch]);

  return (
    <div>
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Product Name</Th>
              <Th>Brand</Th>
              <Th>MFG Date</Th>
              <Th>EXP Date</Th>
              <Th>
                <Select
                  placeholder="Box Price"
                  size="xs"
                  fontSize={14}
                  fontWeight="600"
                  value={mode}
                  onChange={handleMode}
                >
                  <option value="wholesale">Wholesale</option>
                  <option value="retail">Retail</option>
                </Select>
              </Th>
              <Th>Leaf Price</Th>
              <Th>Retail Price</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>

          {users?.length &&
            users.map((e, index) => {
              return <Card key={e.id} {...e} serial={index} />;
            })}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Homepage;
