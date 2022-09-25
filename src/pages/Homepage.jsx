import React, { useState } from "react";

import { Table, Thead, Tr, Th, TableContainer, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../components/Card";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {


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

          {/* {users?.length &&
            users.map((e, index) => {
              return <Card key={e.id} {...e} serial={index} />;
            })} */}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Homepage;
