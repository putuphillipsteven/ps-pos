import {
  Box,
  Text,
  Image,
  Center,
  VStack,
  Button,
  Spacer,
} from "@chakra-ui/react";
import logo from "../../component/SideBar/cklogo.png";
import poster from "./poster.jpeg";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Box w={"100vw"} bg={"#ED1C24"} h={"100%"}>
      <Image src={poster} w={"100%"} />
      <Box w={"100%"}>
        <VStack bg={"#ED1C24"} h={"13.6em"}>
          <Image src={logo} h={"5em"} />
          <VStack p={""}>
            <Button
              w={"20em"}
              onClick={() => navigate("/transaction")}
              borderRadius={"1em"}
              transition="transform .3s"
              _hover={{ transform: "scale(1.05)" }}
              boxShadow={"md"}
            >
              Transaction
            </Button>
            <Button
              w={"20em"}
              onClick={() => navigate("/admin")}
              borderRadius={"1em"}
              transition="transform .3s"
              _hover={{ transform: "scale(1.05)" }}
              boxShadow={"md"}
            >
              Admin
            </Button>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
}
