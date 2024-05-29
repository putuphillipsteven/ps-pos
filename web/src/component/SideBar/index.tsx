import {
  Box,
  HStack,
  Image,
  VStack,
  Text,
} from "@chakra-ui/react";
import cklogo from "./cklogo.png";
import { PiBasketFill } from "react-icons/pi";
import { PiCalculatorFill } from "react-icons/pi";
import { PiNotepadFill } from "react-icons/pi";
import { IoLogOut } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SideBar() {
  const navigate = useNavigate()
  const [order, setOrder] = useState(true);
  const [transaction, setTransaction] = useState(false);
  const [inventory, setInventory] = useState(false);
  const [logout, setLogout] = useState(false);

  return (
    <VStack
      top={"0"}
      w={"100%"}
      h={"100%"}
      bgColor={"#ED1C24"}
      p={"3em 1em 1em 1em"}
      spacing={"3.75em"}
    >
      <Box>
        <Image src={cklogo} w={"9.75em"} />
      </Box>
      <VStack
        w={"100%"}
        spacing={"1.5em"}
        align={"flex-end"}
      >
        <Box
          w={"100%"}
          h={"2.5em"}
          display={"flex"}
          flexDir={"row"}
          borderRadius={"0.5em"}
          transition={"transform .3s"}
          _hover={{
            bgColor: "#F99B2A",
            boxShadow: "lg",
            transform: "scale(1.05)",
          }}
        >
          <HStack
            spacing={"1em"}
            onClick={() => {
              setInventory(false);
              setTransaction(false);
              setLogout(false);
              setOrder(!order);
              navigate("")
            }}
            boxShadow={order ? "lg" : "none"}
            bgColor={order ? "#F99B2A" : "transparent"}
            w={"100%"}
            borderRadius={".5em"}
            p={".65em"}
            cursor={"pointer"}
          >
            <Box color={"white"}>
              <PiBasketFill />
            </Box>
            <Box color={"white"}>
                <Text as={order ? "b" : "b"}>Order</Text>
            </Box>
          </HStack>
        </Box>
        <Box
          w={"100%"}
          h={"2.5em"}
          display={"flex"}
          flexDir={"row"}
          borderRadius={"0.5em"}
          transition={"transform .3s"}
          _hover={{
            bgColor: "#F99B2A",
            boxShadow: "lg",
            transform: "scale(1.05)",
          }}
        >
          <HStack
            spacing={"1em"}
            onClick={() => {
              setOrder(false);
              setInventory(false);
              setLogout(false);
              setTransaction(!transaction);
              navigate("admin/product")
            }}
            boxShadow={transaction ? "lg" : "none"}
            bgColor={
              transaction ? "#F99B2A" : "transparent"
            }
            w={"100%"}
            borderRadius={".5em"}
            p={".65em"}
            cursor={"pointer"}
          >
            <Box color={"white"}>
              <PiCalculatorFill />
            </Box>
            <Box color={"white"}>
                <Text as={transaction ? "b" : "b"}>
                  Product
                </Text>
            </Box>
          </HStack>
        </Box>
        <Box
          w={"100%"}
          h={"2.5em"}
          display={"flex"}
          flexDir={"row"}
          _focusVisible={{ color: "red" }}
          borderRadius={"0.5em"}
          transition={"transform .3s"}
          _hover={{
            bgColor: "#F99B2A",
            boxShadow: "lg",
            transform: "scale(1.05)",
          }}
        >
          <HStack
            spacing={"1em"}
            onClick={() => {
              setOrder(false);
              setTransaction(false);
              setLogout(false);
              setInventory(!inventory);
            }}
            boxShadow={inventory ? "lg" : "none"}
            bgColor={inventory ? "#F99B2A" : "transparent"}
            w={"100%"}
            borderRadius={".5em"}
            p={".65em"}
            cursor={"pointer"}
          >
            <Box color={"white"}>
              <PiNotepadFill />
            </Box>
            <Box color={"white"}>
              <Link to={""}>
                <Text as={inventory ? "b" : "b"}>
                  Employee
                </Text>
              </Link>
            </Box>
          </HStack>
        </Box>
      </VStack>
      <Box
        w={"100%"}
        h={"2.5em"}
        display={"flex"}
        flexDir={"row"}
        _focusVisible={{ color: "red" }}
        borderRadius={"0.5em"}
        transition={"transform .3s"}
        _hover={{
          bgColor: "#F99B2A",
          boxShadow: "lg",
          transform: "scale(1.05)",
        }}
      >
        <HStack
          spacing={"1em"}
          onClick={() => {
            setOrder(false);
            setTransaction(false);
            setInventory(false);
            setLogout(!logout);
          }}
          bgColor={logout ? "#F99B2A" : "transparent"}
          boxShadow={logout ? "lg" : "none"}
          w={"100%"}
          borderRadius={".5em"}
          p={".65em"}
          cursor={"pointer"}
        >
          <Box color={"white"}>
            <IoLogOut />
          </Box>
          <Box color={"white"}>
            <Link to={""}>
              <Text as={logout ? "b" : "b"}>Log Out</Text>
            </Link>
          </Box>
        </HStack>
      </Box>
    </VStack>
  );
}
