import { Badge, Button, ButtonGroup, Tbody, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { delUser, loadUser } from "../redux/action";
import { Link } from 'react-router-dom';

const Card = ({ id, name, email, phone, status }) => {
  const dispatch = useDispatch();

  const handleDel = (id) => {
    dispatch(delUser(id)).then(() => {
        dispatch(loadUser())
    })
  };



  return (
    <Tbody>
      <Tr>
        <Td>{id}</Td>
        <Td>{name}</Td>
        <Td>{email}</Td>
        <Td>{phone}</Td>
        <Td>
          {status==='true' ? (
            <Badge colorScheme={"green"}>Active</Badge>
          ) : (
            <Badge colorScheme={"red"}>Not Active</Badge>
          )}
        </Td>
        <Td>
          <ButtonGroup variant="outline" spacing="6">
            <Link to={`/editpage/${id}`}><Button colorScheme="green">Edit</Button></Link>
            <Button colorScheme="red" onClick={() => handleDel(id)}>
              Delete
            </Button>
          </ButtonGroup>
        </Td>
      </Tr>
    </Tbody>
  );
};

export default Card;
