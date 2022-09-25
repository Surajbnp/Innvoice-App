import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  FormControl,
  Text,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../redux/action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addpage = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [mfg_mth, setMfg] = useState("");
  const [mfg_year, setMfgYear] = useState(0);
  const [exp_mth, setExp] = useState("");
  const [exp_year, setExpYear] = useState(0);
  const [w_p, setBoxW] = useState("");
  const [r_p, setBoxR] = useState("");
  let token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filled, setFilled] = useState(false);

  const handleAdd = () => {
    if (
      !name ||
      !brand ||
      !mfg_mth ||
      !mfg_year ||
      !exp_mth ||
      !exp_year ||
      !w_p ||
      !r_p
    ) {
      //   setFilled(true)
      //   return
    }
    const payload = {
      name,
      brand,
      mfg_mth,
      mfg_year,
      exp_mth,
      exp_year,
      w_p,
      r_p,
    };

    dispatch(createProduct(token, payload)).then((res) => {
      if (res.type == "CREATE_PRODUCT_SUCCESS") {
        toast.success("Product added successfully 😍", {
          position: "top-right",
          autoClose: 2000,
        });
      } else {
        toast.error("Please Login 😊", {
          position: "top-right",
          autoClose: 2000,
        });
      }
    });
    navigate("/");
  };

  return (
    <>
      <Text fontSize={"3xl"} fontWeight="bold">
        Add New Product
      </Text>
      {filled ? (
        <Text size="xs" color="red" fontWeight={600}>
          Please fill all fields
        </Text>
      ) : null}
      <Flex justifyContent="center" h={"90vh"}>
        <Box
          width="45%"
          height={"85%"}
          padding="35px"
          mt={5}
          boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
          borderRadius="15px"
        >
          <Box>
            <FormControl isRequired>
              <FormLabel>Product Name</FormLabel>
              <Input
                placeholder="enter name..."
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setFilled(false);
                }}
              />
              <FormLabel>Brand</FormLabel>
              <Input
                placeholder="enter brand..."
                name="brand"
                value={brand}
                onChange={(e) => {
                  setBrand(e.target.value);
                  setFilled(false);
                }}
              />
              <Box mt={5}>
                <Flex gap={5}>
                  <FormLabel>M.F.G</FormLabel>
                  <Select
                    placeholder="Month"
                    name="mfg_month"
                    value={mfg_mth}
                    onChange={(e) => {
                      setMfg(e.target.value);
                      setFilled(false);
                    }}
                  >
                    <option value="JAN">JAN</option>
                    <option value="FEB">FEB</option>
                    <option value="MAR">MAR</option>
                    <option value="APR">APR</option>
                    <option value="MAY">MAY</option>
                    <option value="JUNE">JUNE</option>
                    <option value="JULY">JULY</option>
                    <option value="AUG">AUG</option>
                    <option value="SEPT">SEPT</option>
                    <option value="OCT">OCT</option>
                    <option value="NOV">NOV</option>
                    <option value="DEC">DEC</option>
                  </Select>
                  <Select
                    placeholder="Year"
                    name="mfg_year"
                    value={mfg_year}
                    onChange={(e) => {
                      setMfgYear(e.target.value);
                      setFilled(false);
                    }}
                  >
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                    <option value="2035">2035</option>
                  </Select>
                </Flex>
              </Box>

              <Box mt={5}>
                <Flex gap={5}>
                  <FormLabel>E.X.P</FormLabel>
                  <Select
                    placeholder="Month"
                    name="exp_year"
                    value={exp_mth}
                    onChange={(e) => {
                      setExp(e.target.value);
                      setFilled(false);
                    }}
                  >
                    <option value="JAN">JAN</option>
                    <option value="FEB">FEB</option>
                    <option value="MAR">MAR</option>
                    <option value="APR">APR</option>
                    <option value="MAY">MAY</option>
                    <option value="JUNE">JUNE</option>
                    <option value="JULY">JULY</option>
                    <option value="AUG">AUG</option>
                    <option value="SEPT">SEPT</option>
                    <option value="OCT">OCT</option>
                    <option value="NOV">NOV</option>
                    <option value="DEC">DEC</option>
                  </Select>
                  <Select
                    placeholder="Year"
                    name="exp_year"
                    value={exp_year}
                    onChange={(e) => {
                      setExpYear(e.target.value);
                      setFilled(false);
                    }}
                  >
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                  </Select>
                </Flex>
              </Box>
              <Box mt={5}>
                <Flex justifyContent={"space-evenly"} gap={0}>
                  <FormLabel>Price(W)</FormLabel>
                  <FormLabel>Price(R)</FormLabel>
                </Flex>
                <Flex justifyContent={"space-evenly"}>
                  <Input
                    type="number"
                    value={w_p}
                    onChange={(e) => {
                      setBoxW(e.target.value);
                      setFilled(false);
                    }}
                    w="30%"
                  />
                  <Input
                    type="number"
                    value={r_p}
                    w="30%"
                    onChange={(e) => {
                      setBoxR(e.target.value);
                      setFilled(false);
                    }}
                  />
                </Flex>
              </Box>
            </FormControl>
            <Button colorScheme={"whatsapp"} w={40} onClick={handleAdd} mt={5}>
              Add
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Addpage;
