import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Text,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { editBill, singleBill } from "../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Model({ total, id, bill }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [payload, setPay] = useState(0);
  const initialRef = React.useRef(null);
  

  let pay = bill?.cartTotal;
  if (payload <= +pay) {
    pay = pay - +payload;
  }

  const payBill = (id) => {
    //setting payment & date
    
    if (payload > 0) {
      const load = {
        ...bill,
        cartTotal: pay,
      };
      dispatch(editBill(id, load)).then((r) => {
        if (r.type === "EDIT_BILL_SUCCESS") {
          dispatch(singleBill(id));
          toast.success("Bill Paid Successfully...!", {
            autoClose: 2000,
          });
        }
      });
    }
  };

 
  

  return (
    <>
      <Button colorScheme={"green"} onClick={onOpen}>
        Pay Bill
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>Pay your bill...</ModalHeader>
          <Text
            textAlign={"center"}
            color="red.400"
            fontWeight="700"
          >{`Total Due - ${total} ₹`}</Text>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                ref={initialRef}
                onChange={(e) => setPay(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="green"
              w={20}
              mr={3}
              onClick={() => {
                payBill(id);
                onClose();
              }}
            >
              Pay
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              Cancel
            </Button>
            <ToastContainer />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Model;
