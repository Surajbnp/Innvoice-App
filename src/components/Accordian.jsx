import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { delCart, loadCart } from "../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Accordian = ({
  name,
  boxR,
  boxW,
  brand,
  mfgMonth,
  mfgYear,
  expMonth,
  expYear,
  id,
  leafC,
  subTotal,
  boxC,
  retailC,
}) => {
  const dispatch = useDispatch();

  let mode = localStorage.getItem("mode");
  let boxPrice = 0;
  if (mode === "wholesale") {
    boxPrice = boxW;
  } else {
    boxPrice = boxR;
  }

  if (name.length > 20) {
    name = name + "...";
  }

  const handleCart = (id) => {
    dispatch(delCart(id))
      .then((r) => {
        if (r.type === "DELETE_CART_SUCCESS") {
          toast.success("Item Deleted Successfully😊... !", {
            autoClose: 2000,
          });
        }
      })
      .then(() => {
        dispatch(loadCart());
      });
  };

  return (
    <Flex gap={5}>
      <Box border={"1px solid red"} w="70%">
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontWeight={600}
                  fontFamily="cursive"
                >
                  <Text>{name}</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box textAlign={"start"} fontSize="14px" fontWeight={400}>
                <Text fontStyle={"italic"} color="grey">{`by - ${brand}`}</Text>
                <Text>{`mfg :- ${mfgMonth} ${mfgYear}`}</Text>
                <Text>{`exp :- ${expMonth} ${expYear}`}</Text>
                <Flex justifyContent={"space-between"} textAlign="start">
                  <Box w={"70%"}>
                    <Text>
                      Total Box added - <span>{boxC}</span>
                    </Text>
                  </Box>
                  <Box w="30%">
                    <Text fontWeight={500}>{boxPrice}rs/box</Text>
                  </Box>
                </Flex>

                <Text>
                  Total Leaf Added -{" "}
                  <span style={{ fontSize: "16px" }}>{leafC}</span>
                </Text>
                <Text>
                  Total Tablet Added -{" "}
                  <span style={{ fontSize: "16px" }}>{retailC}</span>
                </Text>
                <Text>----------------------</Text>
                <Text fontWeight={600}>Total - {subTotal} rs/-</Text>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      <Box
        border={"1px solid red"}
        w={10}
        h={10}
        bg={"red"}
        cursor="pointer"
        onClick={() => handleCart(id)}
      >
        <DeleteIcon mt={3} color="white" />
        <ToastContainer />
      </Box>
    </Flex>
  );
};

export default Accordian;
