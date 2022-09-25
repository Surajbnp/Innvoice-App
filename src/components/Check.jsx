// import React from "react";
// import {
//   Button,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { useDispatch } from 'react-redux';
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
// } from "@chakra-ui/react";
// import { delBill, loadBill } from "../redux/action";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Check({id}) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const dispatch = useDispatch()

//   const handleBill = (id) => {
//       dispatch(delBill(id)).then((r) => {
//         if(r.type === "DELETE_BILL_SUCCESS"){
//             dispatch(loadBill())
//             toast.success("Bill deleted successfully... !",{
//                 autoClose:2000
//             })
//         }
//       })
//   }

//   return (
//     <>
//       <Button colorScheme={'red'} onClick={onOpen}>Close</Button>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay
//           bg="blackAlpha.300"
//           backdropFilter="blur(10px) hue-rotate(90deg)"
//         />
//         <ModalContent>
//           <ModalHeader>Do you want to close the Bill... ? </ModalHeader>
//           <ModalCloseButton />
//           <ModalBody pb={6}></ModalBody>

//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} w={20} onClick={() => {
//                 handleBill(id)
//                 onClose()
//             }}>
//               OK
//             </Button>
//             <Button colorScheme={'red'} onClick={onClose}>Cancel</Button>
//             <ToastContainer />
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }

// export default Check;
