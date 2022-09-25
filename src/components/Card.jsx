import { Badge, Button, ButtonGroup, Tbody, Td, Tr } from "@chakra-ui/react";
import React,{useCallback} from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DeleteIcon, AddIcon } from "@chakra-ui/icons";
import { BsFillPencilFill } from "react-icons/bs";



const Card = ({
  _id,
  brand,
  name,
  mfg_mth,
  mfg_year,
  exp_mth,
  serial,
  exp_year,
  w_p,
  r_p,
  handleDel
}) => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let mode = localStorage.getItem("mode");
  const token = localStorage.getItem("token")
  let boxPrice = 0;

  if (name.length > 20) {
    name = name + "...";
  }

  if (mode === "wholesale") {
    boxPrice = w_p;
  } else {
    boxPrice = r_p;
  }

  return (
    <Tbody>
      <Tr>
        <Td>{serial + 1}</Td>
        <Td>{name}</Td>
        <Td>{brand}</Td>
        <Td>
          <Badge colorScheme={"green"}>{`${mfg_mth}/${mfg_year}`}</Badge>
        </Td>
        <Td>
          <Badge colorScheme={"red"}>{`${exp_mth}/${exp_year}`}</Badge>
        </Td>
        <Td textAlign={"center"}>{`${boxPrice} ₹`}</Td>
        {/* <Td>{`${leaf_price} ₹`}</Td>
        <Td>{`${retail_price} ₹`}</Td> */}
        <Td>
          <ButtonGroup variant="outline" spacing="2">
            <Link to={`/products/edit/${_id}`}>
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
              onClick={() => handleDel(_id)}
            ></Button>
            <Button
              colorScheme="red"
              w={10}
              pr="2"
              onClick={() => {
                navigate(`/productpage/${_id}`);
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
