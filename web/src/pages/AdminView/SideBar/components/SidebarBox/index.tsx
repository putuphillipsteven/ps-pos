import { Box, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const SidebarBox = (props: any) => {
  const navigate = useNavigate();
  return (
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
      onClick={() => navigate(props?.to)}
      cursor={"pointer"}
    >
      <HStack
        spacing={"1em"}
        onClick={() => {
          // props?.setInventory(false);
          // props?.setTransaction(false);
          // props?.setLogout(false);
          // props?.setOrder(!props?.order);
        }}
        boxShadow={props?.order ? "lg" : "none"}
        bgColor={props?.order ? "#F99B2A" : "transparent"}
        w={"100%"}
        borderRadius={".5em"}
        p={".65em"}
        cursor={"pointer"}
      >
        <Box color={"white"}>{props?.icon}</Box>
        <Box color={"white"}>
          <Text as={props?.order ? "b" : "b"}>
            {props?.text}
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};
