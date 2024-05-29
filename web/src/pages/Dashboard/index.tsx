import {
  Box,
  Flex,
  HStack,
  IconButton,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AreaChart } from "./component/Chart";
import { AdminProductList } from "../AdminView/AdminProductList";
import { RiAccountCircleLine } from "react-icons/ri";
import ProductInCart from "../../component/ProductInCart";

export const Dashboard = () => {
  return (
    <Flex
      w={"100%"}
      h={"100%"}
      borderRadius={"1em"}
      flexDir={"column"}
    >
      <Box>
        <Text>Dashboard</Text>
      </Box>
      <Spacer />
      <Box h={"100%"}>
        <HStack w={"100%"} h={"100%"} p={"1.5em"}>
          <Box
            w={"100%"}
            h={"100%"}
            borderRadius={"1em"}
            flexDir={"column"}
            gap={"1em"}
          >
            <Box
              borderRadius={"1.5em"}
              p={".5em"}
              bgColor={"#ffffff"}
              h={"50%"}
              w={"100%"}
            >
              <AreaChart />
            </Box>
            <Box w={"100%"}>
              <Text mb={".5em"}>Employee Shift</Text>
              <HStack align={"stretch"}>
                <Box
                  bgColor={"#ffffff"}
                  borderRadius={"1em"}
                  p={"1em"}
                >
                  <VStack>
                    <IconButton
                      aria-label=""
                      bgColor={"transparent"}
                      _hover={{ _bg: "transparent" }}
                      fontSize={"3em"}
                      p={".5em"}
                      icon={<RiAccountCircleLine />}
                    />
                    <Text fontWeight={"bold"}>
                      I Putu Phillip Steven
                    </Text>
                    <Text fontSize={".75em"}>
                      Programmer
                    </Text>
                  </VStack>
                </Box>
                <Box
                  bgColor={"#ffffff"}
                  borderRadius={"1em"}
                  p={"1em"}
                >
                  <VStack>
                    <IconButton
                      aria-label=""
                      bgColor={"transparent"}
                      _hover={{ _bg: "transparent" }}
                      fontSize={"3em"}
                      p={".5em"}
                      icon={<RiAccountCircleLine />}
                    />
                    <Text fontWeight={"bold"}>
                      Samuel Williams
                    </Text>
                    <Text fontSize={".75em"}>
                      Programmer
                    </Text>
                  </VStack>
                </Box>
                <Box
                  bgColor={"#ffffff"}
                  borderRadius={"1em"}
                  p={"1em"}
                >
                  <VStack>
                    <IconButton
                      aria-label=""
                      bgColor={"transparent"}
                      _hover={{ _bg: "transparent" }}
                      fontSize={"3em"}
                      p={".5em"}
                      icon={<RiAccountCircleLine />}
                    />

                    <Text fontWeight={"bold"}>
                      Surya Nathaniel
                    </Text>
                    <Text fontSize={".75em"}>Designer</Text>
                  </VStack>
                </Box>
              </HStack>
            </Box>
          </Box>
          <Box w={"full"} h={"100%"}>
            <Box
              mb={"1em"}
              bgColor={"#ffffff"}
              borderRadius={"1em"}
              p={".5em"}
              h={"50%"}
            >
              <Text>Out of stock</Text>
              {/* <ProductInCart /> */}
            </Box>
            <Box
              bgColor={"#ffffff"}
              borderRadius={"1em"}
              p={".5em"}
              h={"47%"}
            >
              <Text>Out of stock</Text>
            </Box>
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
};
