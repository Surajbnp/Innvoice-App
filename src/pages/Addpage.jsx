import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  FormControl,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action";
import { useNavigate } from "react-router-dom";

const Addpage = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [mfgMonth, setMfg] = useState("");
  const [mfgYear, setMfgYear] = useState(0);
  const [expMonth, setExp] = useState("");
  const [expYear, setExpYear] = useState(0);
  const [boxW, setBoxW] = useState("");
  const [boxR, setBoxR] = useState("");
  const [no_of_leaf, setLeaf] = useState("");
  const [no_of_tab, setTab] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = () => {
    const payload = {
      name,
      brand,
      mfgMonth,
      mfgYear,
      expMonth,
      expYear,
      boxW,
      boxR,
      no_of_leaf,
      no_of_tab,
    };

    dispatch(addUser(payload));
    navigate("/");
  };

  return (
    <>
      <Flex justifyContent="center" mt={5}>
        <Box
          border={"1px solid red"}
          width="35%"
          height={"82vh"}
          padding="35px"
        >
          <Box height="100%">
            <FormControl isRequired>
              <FormLabel>Product Name</FormLabel>
              <Input
                placeholder="enter name..."
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FormLabel>Brand</FormLabel>
              <Input
                placeholder="enter brand..."
                name="brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
              <Box mt={5}>
                <Flex gap={5}>
                  <FormLabel>M.F.G</FormLabel>
                  <Select
                    placeholder="Month"
                    name="mfg_month"
                    value={mfgMonth}
                    onChange={(e) => setMfg(e.target.value)}
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
                    value={mfgYear}
                    onChange={(e) => setMfgYear(e.target.value)}
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
                <Flex gap={5}>
                  <FormLabel>E.X.P</FormLabel>
                  <Select
                    placeholder="Month"
                    name="exp_year"
                    value={expMonth}
                    onChange={(e) => setExp(e.target.value)}
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
                    value={expYear}
                    onChange={(e) => setExpYear(e.target.value)}
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
                <Flex justifyContent={"space-evenly"} gap={3}>
                  <FormLabel>Box Price(W)</FormLabel>
                  <FormLabel>Box Price(R)</FormLabel>
                  <FormLabel>Leaf Quantity</FormLabel>
                  <FormLabel>Tablet Quantity</FormLabel>
                </Flex>
                <Flex justifyContent={"space-between"} gap={3}>
                  <Input
                    type="number"
                    value={boxW}
                    onChange={(e) => setBoxW(e.target.value)}
                  />
                    <Input
                    type="number"
                    value={boxR}
                    onChange={(e) => setBoxR(e.target.value)}
                  />
                  <Input
                    type="number"
                    value={no_of_leaf}
                    onChange={(e) => setLeaf(e.target.value)}
                  />
                  <Input
                    type="number"
                    value={no_of_tab}
                    onChange={(e) => setTab(e.target.value)}
                    />
                </Flex>
              </Box>
            </FormControl>
            <Button colorScheme={"green"} w={20} onClick={handleAdd} mt={5}>
              Add
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Addpage;
