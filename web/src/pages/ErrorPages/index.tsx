import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ErrorPages = () => {
  return (
    <Box h={"100vh"} w={"100%"}>
      <Flex
        w={"100%"}
        h={"100%"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text fontWeight={"bold"}>
          Sorry, page not found
        </Text>
        <Link to={"/"}>Home</Link>
        <Link to={"/admin"}>Admin</Link>
        <Link to={"/"}>Cashier</Link>
        <Text></Text>
      </Flex>
    </Box>
  );
};
