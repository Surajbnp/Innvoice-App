import React, { useEffect } from "react";
import { Badge, Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { loadBill } from "../redux/action";
import Check from "../components/Check";


const BillPage = () => {
  const billData = useSelector((state) => state.bill);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBill());
  }, [dispatch]);

  return (
    <Box>
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Doctor's Name</Th>
              <Th>Adress</Th>
              <Th>Due</Th>
              <Th>Bill Date</Th>
              <Th>Mobile</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {billData?.length &&
              billData?.map((e) => {
                return (
                  <Tr key={e.id}>
                    <Td>{e.id}</Td>
                    <Td>{e.drName}</Td>
                    <Td>{e.drAdd}</Td>
                    <Td>{e.cartTotal}</Td>
                    <Td>{e.date}</Td>
                    <Td>{e?.dePhon || "Not-Provided"}</Td>
                    <Td>
                      <Badge colorScheme={"green"}>Active</Badge>
                    </Td>

                    <Td>
                      <Flex gap={5}>
                        <Button
                        colorScheme={'blue'}
                          onClick={() => {
                            navigate(`/bill/${e.id}`);
                          }}
                        >
                          Open
                        </Button>
                          <Check id={e.id}/>
                      </Flex>
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BillPage;
