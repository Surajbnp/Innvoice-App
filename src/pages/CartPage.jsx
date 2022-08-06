import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Accordian from "../components/Accordian";
import { Flex } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addBill, delCart, loadCart } from "../redux/action";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dName, setName] = useState("");
  const [add, setAdd] = useState("");
  const [phon, setPhon] = useState("");
  const [date, setDate] = useState("");

  const totalArr = cartData.map((e) => {
    let sum = 0;
    sum = sum + +e.subTotal;
    return sum;
  });

  const total = totalArr?.reduce((prev, curr) => {
    return prev + curr;
  }, 0);

  const clearCart = () => {
    let Id = cartData?.length;

    while ((Id > 0)) {
      dispatch(delCart(Id)).then((r) => {
        if(r.type === "DELETE_CART_SUCCESS"){
          dispatch(loadCart());
        }
      })
      Id--;
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (dName && add && date) {
      const payload = {
        drName: dName,
        drAdd: add,
        dePhon: phon,
        date,
        perticulars: cartData,
        cartTotal: total,
      };

      dispatch(addBill(payload)).then((res) => {
        if (res.type === "ADD_BILL_SUCCESS") {
          navigate("/");
          toast.success("Bill Created Successfully...😊", {
            autoClose: 2000,
          });
        }
      });
    } else {
      alert("enter the doctors detail");
      return;
    }
  };

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  return (
    <Flex justifyContent={"space-around"} h="auto" mt={10}>
      <Flex h="auto" w="40%" direction="column" gap={5}>
        <Flex justifyContent={"space-between"}>
          <Text textAlign={"start"} fontSize={"3xl"} fontStyle="oblique">
            Cart
          </Text>
          <Button
            mt={5}
            colorScheme="red"
            fontSize="12px"
            h={5}
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </Flex>
        <Flex alignItems={"center"} justifyContent="space-between">
          <Text
            textAlign={"start"}
            color="grey"
            fontSize="sm"
            fontFamily={"sans-serif"}
            fontWeight={500}
          >
            Total{" "}
            <span style={{ fontSize: "20px", color: "red" }}>
              {cartData?.length}
            </span>{" "}
            Items In Cart
          </Text>

          <Text
            color="red"
            fontStyle={"italic"}
            fontSize={"md"}
            fontWeight={600}
          >
            Total - <span style={{ color: "grey" }}>{total} ₹</span>
          </Text>
        </Flex>

        {cartData?.length &&
          cartData.map((e, index) => {
            return <Accordian key={index} {...e} />;
          })}
      </Flex>
      <Box bg={"grey"} w="1px" h="80vh"></Box>
      <Box w="30%" p={8} border={"1px solid red"} h={"80vh"}>
        <Text fontSize={"xl"} fontWeight={600} color="orange">
          DOCTOR'S DETAILS
        </Text>
        <FormControl mt={5}>
          <FormLabel>Doctor Name</FormLabel>
          <Input
            placeholder="enter name..."
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel>Address</FormLabel>
          <Input
            placeholder="enter name..."
            onChange={(e) => setAdd(e.target.value)}
          />
          <FormLabel>Mobile</FormLabel>
          <Input
            placeholder="enter name..."
            onChange={(e) => setPhon(e.target.value)}
          />
          <FormLabel>Date</FormLabel>
          <Input
            type="date"
            placeholder="enter name..."
            onChange={(e) => setDate(e.target.value)}
          />
        </FormControl>

        <Box mt={8}>
          <Button
            colorScheme={"orange"}
            fontWeight={400}
            w="50%"
            mt={5}
            onClick={(e) => {
              handleForm(e)
            }}
          >
            Create Bill
          </Button>
          <ToastContainer />
        </Box>
      </Box>
    </Flex>
  );
};

export default CartPage;
