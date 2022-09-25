// import { Badge, Box, Button, Flex,  Text } from "@chakra-ui/react";
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { addCart, getSingleUser } from "../redux/action";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ProductPage = () => {
//   const { id } = useParams();
//   const userData = useSelector((state) => state?.users);
//   const dispatch = useDispatch();
//   const [boxC, setBoxC] = useState(0);
//   const [leafC, setLeafC] = useState(0);
//   const [retailC, setRetailC] = useState(0);
//   const navigate = useNavigate();


//   const handleBox = (payload) => {
//     setBoxC((prev) => prev + payload);
//   };

//   const handleRetail = (payload) => {
//     setRetailC((prev) => prev + payload);
//   };

//   const handleLeaf = (payload) => {
//     setLeafC((prev) => prev + payload);
//   };

//   let mode = localStorage.getItem("mode");
//   let price = 0;

//   if (mode === "wholesale") {
//     price = userData.boxW;
//   } else {
//     price = userData.boxR;
//   }
//   let leaf_price = +price / +userData.no_of_leaf;
//   leaf_price = leaf_price.toFixed(2);
//   let retail_price = +leaf_price / +userData.no_of_tab;
//   retail_price = retail_price.toFixed(2);

//   let leafTotal = leaf_price * leafC;
//   leafTotal = leafTotal.toFixed(2);

//   let tabTotal = retail_price * retailC;
//   tabTotal = tabTotal.toFixed(2);

//   let boxTotal = boxC * price;
//   let subTotal = +boxTotal + +leafTotal + +tabTotal;
//   subTotal = subTotal.toFixed(2);

//   const handlecart = () => {
//     const payload = {
//       ...userData,
//       boxC,
//       leafC,
//       retailC,
//       boxTotal,
//       leafTotal,
//       tabTotal,
//       subTotal,
//     };

//     if (subTotal > 0) {
//       dispatch(addCart(payload)).then((r) => {
//         console.log(r);
//         if (r.type === "ADD_CART_SUCCESS") {
//           navigate("/");
//           toast.success("Added Successfully In Cart!", {
//             position: "top-right",
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });

//         } else {
//           toast.error("Item Is Allready In Cart🥰!", {
//             position: "top-right",
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//           });
//         }
//       });
//     }
//   };

  

//   useEffect(() => {
//     dispatch(getSingleUser(id));
//   }, [dispatch, id]);

//   console.log(userData)

//   return (
//     <Flex h="90vh" justifyContent={"space-evenly"} alignItems="center">
//       <Box
//         border={"2px solid red"}
//         p={5}
//         borderTopLeftRadius="20px"
//         borderBottomRightRadius={"20px"}
//         h="auto"
//         w={"30%"}
//       >
//         <Text color={"grey"} fontSize="3xl" fontWeight={600} textAlign="start">
//           Description
//         </Text>

//         <Box textAlign={"start"} mt={5}>
//           <Text fontSize={"3xl"} fontWeight={700}>
//             {userData.name}
//           </Text>
//           <Text
//             fontStyle={"italic"}
//             color="grey"
//           >{`by :- ${userData.brand}`}</Text>
//           <Box mt={5} fontStyle="italic" fontWeight={500}>
//             <Text mt={2}>
//               mfg date :-
//               <Badge
//                 colorScheme="green"
//                 ml={2}
//               >{`${userData.mfgMonth}  ${userData.mfgYear}`}</Badge>
//             </Text>
//             <Text mt={2}>
//               exp date :-
//               <Badge
//                 colorScheme="red"
//                 ml={2}
//               >{`${userData.expMonth}  ${userData.expYear}`}</Badge>
//             </Text>
//             <Box display={"flex"} justifyContent="space-between" mt={5}>
//               <Text mt={2}>Box Price :- {price} ₹</Text>
//               <Box display={"flex"} alignItems="center" gap={5}>
//                 <Button
//                   colorScheme={"red"}
//                   w={10}
//                   h={10}
//                   disabled={boxC === 0}
//                   onClick={() => handleBox(-1)}
//                 >
//                   -
//                 </Button>
//                 <Text>{boxC}</Text>
//                 <Button
//                   colorScheme={"green"}
//                   w={15}
//                   h={10}
//                   onClick={() => handleBox(1)}
//                 >
//                   +
//                 </Button>
//               </Box>
//             </Box>

//             <Box display={"flex"} justifyContent="space-between" mt={5}>
//               <Text mt={2}>Leaf Price :- {leaf_price} ₹</Text>
//               <Box display={"flex"} alignItems="center" gap={5}>
//                 <Button
//                   colorScheme={"red"}
//                   w={10}
//                   h={10}
//                   disabled={leafC === 0}
//                   onClick={() => handleLeaf(-1)}
//                 >
//                   -
//                 </Button>
//                 <Text>{leafC}</Text>
//                 <Button
//                   colorScheme={"green"}
//                   w={15}
//                   h={10}
//                   onClick={() => handleLeaf(1)}
//                 >
//                   +
//                 </Button>
//               </Box>
//             </Box>

//             <Box display={"flex"} justifyContent="space-between" mt={5}>
//               <Text mt={2}>Retail Price :- {retail_price} ₹</Text>
//               <Box display={"flex"} alignItems="center" gap={5}>
//                 <Button
//                   colorScheme={"red"}
//                   w={10}
//                   h={10}
//                   disabled={retailC === 0}
//                   onClick={() => handleRetail(-1)}
//                 >
//                   -
//                 </Button>
//                 <Text>{retailC}</Text>
//                 <Button
//                   colorScheme={"green"}
//                   w={15}
//                   h={10}
//                   onClick={() => handleRetail(1)}
//                 >
//                   +
//                 </Button>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Box>

//       <Box bg={"grey"} w="1px" h="80vh"></Box>

//       <Box
//         h="auto"
//         w="30%"
//         p={5}
//         border="2px solid red"
//         borderTopRightRadius={"20px"}
//         borderBottomLeftRadius="20px"
//       >
//         <Text fontSize="3xl" color={"grey"} fontWeight={600} textAlign="start">
//           Summary
//         </Text>

//         <Box textAlign={"start"} mt={10}>
//           <Flex gap={10} justifyContent="space-between">
//             <Box>
//               <Text fontStyle={"italic"} fontWeight={500}>
//                 Box Total
//               </Text>
//             </Box>
//             <Box>
//               <Text>
//                 {" "}
//                 {price} x {boxC} = {boxTotal}
//               </Text>
//             </Box>
//           </Flex>
//           <Flex gap={10} justifyContent="space-between">
//             <Box>
//               <Text fontStyle={"italic"} fontWeight={500}>
//                 Leaf Total
//               </Text>
//             </Box>
//             <Box>
//               <Text>
//                 {" "}
//                 {leaf_price} x {leafC} = {leafTotal}
//               </Text>
//             </Box>
//           </Flex>
//           <Flex gap={10} justifyContent="space-between">
//             <Box>
//               <Text fontStyle={"italic"} fontWeight={500}>
//                 Tablet Total
//               </Text>
//             </Box>
//             <Box>
//               <Text>
//                 {" "}
//                 {retail_price} x {retailC} = {tabTotal}
//               </Text>
//             </Box>
//           </Flex>
//           <Flex gap={10} justifyContent="space-between">
//             <Box></Box>
//             <Box textAlign={"end"}>
//               <Text>--------------------</Text>
//               <Text fontWeight={700}> Total = {subTotal} rs/-</Text>
//             </Box>
//           </Flex>
//         </Box>

//         <Box mt={10}>
//           <Button colorScheme={"orange"} onClick={handlecart}>
//             Add to Cart
//           </Button>
//           <ToastContainer
//             position="top-right"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover 
//           />
//         </Box>
//        </Box> 
//     </Flex>
    
//   );
// };

// export default ProductPage;
