import { Badge, Button, ButtonGroup, Tbody, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { delUser, loadUser } from "../redux/action";
import { Link, useNavigate } from "react-router-dom";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import { BsFillPencilFill } from "react-icons/bs";


const Card = ({
  id,
  brand,
  name,
  mfgMonth,
  mfgYear,
  expMonth,
  serial,
  expYear,
  boxW,
  boxR,
  no_of_leaf,
  no_of_tab,
}) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let mode = localStorage.getItem("mode");
  console.log(mode);
  let boxPrice = 0;

  if (name.length > 20) {
    name = name + "...";
  }

  if (mode === "wholesale") {
    boxPrice = boxW;
  } else {
    boxPrice = boxR;
  }
  let leaf_price = +boxPrice / +no_of_leaf;
  leaf_price = leaf_price.toFixed(2);
  let retail_price = +leaf_price / +no_of_tab;
  retail_price = retail_price.toFixed(2);

  const handleDel = (id) => {
    dispatch(delUser(id)).then(() => {
      dispatch(loadUser());
    });
  };

  return (
    <Tbody>
      <Tr>
        <Td>{serial + 1}</Td>
        <Td>{name}</Td>
        <Td>{brand}</Td>
        <Td>
          <Badge colorScheme={"green"}>{`${mfgMonth}/${mfgYear}`}</Badge>
        </Td>
        <Td>
          <Badge colorScheme={"red"}>{`${expMonth}/${expYear}`}</Badge>
        </Td>
        <Td textAlign={"center"}>{`${boxPrice} ₹`}</Td>
        <Td>{`${leaf_price} ₹`}</Td>
        <Td>{`${retail_price} ₹`}</Td>
        <Td>
          <ButtonGroup variant="outline" spacing="2">
            <Link to={`/editpage/${id}`}>
              <Button
                colorScheme="green"
                pr="2"
                w={10}
                leftIcon={<BsFillPencilFill />}
              ></Button>
            </Link>
            <Button
              colorScheme="red"
              pr="2"
              w={10}
              leftIcon={<DeleteIcon />}
              onClick={() => handleDel(id)}
            ></Button>
            <Button
              colorScheme="red"
              w={10}
              pr="2"
              onClick={() => {
                navigate(`/productpage/${id}`);
              }}
              leftIcon={<AddIcon />}
            ></Button>
          </ButtonGroup>
        </Td>
      </Tr>
    </Tbody>
  );
};

export default Card;
