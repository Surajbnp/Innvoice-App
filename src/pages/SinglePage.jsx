import React, { useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { Box, Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { BsTelephoneForward } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { singleBill } from "../redux/action";
import Model from "../components/Model";

const SinglePage = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const { id } = useParams();
  const bill = useSelector((state) => state.currBill);
  const dispatch = useDispatch();
  let mode = localStorage.getItem("mode");

  useEffect(() => {
    dispatch(singleBill(id));
  }, [dispatch, id]);

  return (
    <Box h={"160vh"}>
      <Flex p={50} gap={10} direction="row" w={"60%"} margin="auto">
        <Box ref={componentRef} border="1px solid grey" w={"100%"} p={10}>
          <Text fontSize={"2xl"} fontWeight={600} textAlign="center">
            {"INVOICE"}
          </Text>
          <Flex justifyContent={"space-between"}>
            <Text textAlign={"start"} fontSize={"xl"} fontWeight={500}>
              {"PREM MEDICAL AGENCY"}
            </Text>
            <Text>{`Date - ${bill?.date}`}</Text>
          </Flex>

          <Box w={"30%"} textAlign="start">
            <Text fontSize={"sm"} color="grey">
              {"Address - NAGAR UNTARI, GARHWA JHARKHAND (822121)"}
            </Text>
            <Flex alignItems={"center"} gap={3} mt={0.5}>
              <BsTelephoneForward />
              <Text color={"grey"} text>
                {"8809155900"}
              </Text>
            </Flex>
          </Box>

          {/* Agency details end....... */}

          {/* doctor detail start.... */}

          <Box
            mt={10}
            w={"30%"}
            textAlign="start"
            fontSize={"sm"}
            fontWeight={500}
          >
            <Text textAlign={"start"}>To,</Text>
            <Text>{`${bill?.drName}`}</Text>
            <Text color={"grey"}>{`Address ${bill?.drAdd}`}</Text>
            <Text color={"grey"}>{`Contact - ${bill?.dePhon}`}</Text>
          </Box>

          {/* doctor details end ....... */}

          {/* table start..... */}

          <Box mt={10} fontSize="12px" h={"auto"} >
            <Table variant="striped" size={"sm"} >
              <Thead>
                <Tr>
                  <Th >No.</Th>
                  <Th>Perticulars</Th>
                  <Th>Qty.</Th>
                  <Th>Rate</Th>
                  <Th>MFG</Th>
                  <Th>EXP</Th>
                  <Th>Amount</Th>
                </Tr>
              </Thead>
              <Tbody >
                {bill?.perticulars?.map((e, index) => {
                  return (
                    <Tr key={e.id}>
                      <Td>{index + 1}</Td>
                      <Td>{e.name}</Td>
                      <Td>
                        {e.leafC > 0
                          ? `${e.boxC} Box ${e.leafC} Leaf`
                          : `${e.boxC} Box`}
                      </Td>
                      <Td>
                        {mode === "wholesale"
                          ? `${e.boxW}/Box`
                          : `${e.boxR}/Box`}
                      </Td>
                      <Td>{`${e.mfgMonth} ${e.mfgYear}`}</Td>
                      <Td>{`${e.expMonth} ${e.expYear}`}</Td>
                      <Td>{e.subTotal}</Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </Box>

          {/* table ended ..... */}

          {/* calculate toatal */}

          <Box mt={10}>
            <hr
              style={{
                background: "black",
                color: "balck",
                borderColor: "black",
              }}
            />
            <Text textAlign={"end"} mr="15px">
              {`Grand Total - ${bill?.cartTotal} rs/-`}
            </Text>
            <hr
              style={{
                background: "black",
                color: "balck",
                borderColor: "black",
              }}
            />
          </Box>

          <Text mt={10} textAlign="center" fontSize={"10px"} fontWeight={600}>
            Thanks to bussiness with us. For any Queries related to order or
            bill please contact us.
          </Text>
        </Box>
      </Flex>

      <Text fontWeight={500}>
        NOTE :- Before printing the bill make sure you are using{" "}
        <span style={{ color: "red" }}>Light Mode</span>
      </Text>

      <Flex gap={10} margin="auto" mt={10} justify={"center"}>
        <Button
          colorScheme={"blue"}
          onClick={() => {
            handlePrint();
          }}
        >
          Print Out
        </Button>
        <Model total={bill?.cartTotal} id={bill?.id} bill={bill} />
      </Flex>
    </Box>
  );
};

export default SinglePage;

// ref={componentRef}
