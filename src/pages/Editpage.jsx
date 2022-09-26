import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Spinner,
  Text,
  FormControl,
  Select,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {  editProd, getProduct, singleProd } from "../redux/action";

const Editpage = () => {
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
  const { id } = useParams();
  const [prod, setP] = useState([])
  const [loader, setLoader] = useState(false)


  const handleUpdate = () => {
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

    dispatch(editProd(id, token, payload)).then((res) => {
      if(res.type === 'EDIT_PRODUCT_SUCCESS'){
        setLoader(false)
        navigate("/");
      }else{
        setLoader(true)
      }
    })
  };

  useEffect(() => {
    dispatch(singleProd(id, token)).then((res) => {
      setP(res.payload)
    })
  }, [dispatch, id]);

  useEffect(() => {
    if (prod) {
      setName(prod.name);
      setBrand(prod.brand);
      setMfg(prod.mfg_mth);
      setMfgYear(prod.mfg_year);
      setExp(prod.exp_mth);
      setExpYear(prod.exp_year);
      setBoxW(prod.w_p);
      setBoxR(prod.r_p);
    }
  }, [prod]);

  return (
    <>
      <Text>Edit Product</Text>
      {loader ? <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              position="absolute"
              margin="auto"
              top={0}
              left={0}
              right={0}
              bottom={0}
            />: 
      <Flex justifyContent="center">
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
                value={name || ""}
                onChange={(e) => setName(e.target.value)}
              />
              <FormLabel>Brand</FormLabel>
              <Input
                placeholder="enter brand..."
                name="brand"
                value={brand || ""}
                onChange={(e) => setBrand(e.target.value)}
              />
              <Box mt={5}>
                <Flex gap={5}>
                  <FormLabel>M.F.G</FormLabel>
                  <Select
                    placeholder="Month"
                    name="mfg_mth"
                    value={mfg_mth || ""}
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
                    value={mfg_year || ""}
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
                    name="exp_mth"
                    value={exp_mth || ""}
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
                    value={exp_year || ""}
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
                </Flex>
                <Flex justifyContent={"space-between"} gap={3}>
                  <Input
                    type="number"
                    value={w_p || ''}
                    onChange={(e) => setBoxW(e.target.value)}
                  />
                  <Input
                    type="number"
                    value={r_p || ''}
                    onChange={(e) => setBoxR(e.target.value)}
                  />
                </Flex>
              </Box>
              <Button
                colorScheme={"green"}
                w={20}
                mt={5}
                onClick={handleUpdate}
              >
                Update
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Flex>}
    </>
  );
};

export default Editpage;
