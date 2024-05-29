import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import useCounter from "./useCounter";
import { BsCartPlusFill } from "react-icons/bs";
//@ts-ignore
import * as toRupiah from "@develoka/angka-rupiah-js";

export const ProductCard = (props: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count, increment, decrement, reset] = useCounter(1);
  const toast = useToast();
  console.log("image", props.stock);

  const checkExist = () => {
    let condition;
    try {
      props?.cart?.map((el: any) => {
        if (el?.id === props?.id) {
          toast({
            title: "Product Already Added",
            description: "Please Check the Cart",
            status: "warning",
            duration: 2000,
            position: "top-right",
          });
          throw new Error();
        } else {
          condition = true;
          return true;
        }
      });
    } catch (err) {
      throw err;
    }

    return condition;
  };
  return (
    <Box
      h={"280px"}
      w={"200px"}
      boxShadow={"md"}
      borderRadius={"1em"}
      overflow={"hidden"}
      onClick={onOpen}
      transition="transform .3s"
      _hover={{ transform: "scale(1.05)" }}
      cursor={"pointer"}
    >
      <Box bgColor={"gray.300"} h={"170px"} w={"200px"} overflow={"hidden"}>
        <Image
          src={`${import.meta.env.VITE_APP_API_IMAGE_URL}/product/${
            props.product_image
          }`}
          boxSize={"100%"}
        />
      </Box>
      <Flex
        h={"50%"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text color={"#ED1C24"} fontWeight={"bold"} fontSize={"md"}>
          {props.product_name}
        </Text>
        <Text color={"#F99B2A"} fontWeight={"500"} fontSize={"sm"}>
          {toRupiah(props.product_price)}
        </Text>
        <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <VStack p={"1.5em"}>
                <Image
                  src={`${import.meta.env.VITE_APP_API_IMAGE_URL}/product/${
                    props.product_image
                  }`}
                  boxSize={"20em"}
                  borderRadius={".5em"}
                />
                <Text fontWeight={"bold"} color={"red"} fontSize={"xl"}>
                  {props.product_name}
                </Text>
                <Text>{props.product_description}</Text>
                <Text fontWeight={"500"} color={"orange"}>
                  {props.product_price}
                </Text>

                <HStack>
                  <Button
                    size={"md"}
                    bgColor={"transparent"}
                    _hover={{ bgColor: "transparent" }}
                    _active={{ bgColor: "transparent" }}
                    fontSize={"xl"}
                    color={"#ED1C24"}
                    onClick={() => {
                      count > 0 ? decrement() : null;
                    }}
                  >
                    <FaMinusCircle />
                  </Button>
                  <Text fontWeight={"bold"} fontSize={"md"}>
                    {count}
                  </Text>
                  <Button
                    size={"md"}
                    bgColor={"transparent"}
                    _hover={{ bgColor: "transparent" }}
                    _active={{ bgColor: "transparent" }}
                    fontSize={"xl"}
                    color={"#ED1C24"}
                    onClick={() => {
                      count !== 100 ? increment() : null;
                    }}
                  >
                    <FaPlusCircle />
                  </Button>
                </HStack>
              </VStack>
            </ModalBody>
            <Box p={"1em"}>
              <Center>
                <Button
                  leftIcon={<BsCartPlusFill />}
                  type={"submit"}
                  color={"#6D6D6D"}
                  _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
                  onClick={() => {
                    const test = {
                      id: props.id,
                      product_name: props?.product_name,
                      product_price: props?.product_price,
                      qty: count,
                      image: props?.product_image,
                    };
                    const check = checkExist();
                    if (check === false) {
                    } else {
                      props?.setTotalQty(props.totalQty + count);
                      props?.setCart([test, ...props.cart]);
                      props?.setTotal(
                        props.total + count * props.product_price
                      );
                      reset();
                    }
                    onClose();
                  }}
                  w={"15em"}
                >
                  Add to Cart
                </Button>
              </Center>
            </Box>
          </ModalContent>
        </Modal>
      </Flex>
    </Box>
  );
};
