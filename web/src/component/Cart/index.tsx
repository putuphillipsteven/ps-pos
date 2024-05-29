import {
  Box,
  Divider,
  Flex,
  Grid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/layout";
import ProductInCart from "../ProductInCart";
import { Button } from "@chakra-ui/button";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  useDisclosure,
  ModalContent,
  ModalCloseButton,
  Center,
  Input,
  useToast,
} from "@chakra-ui/react";
import { ChangeEvent, useState, useEffect, CSSProperties } from "react";
import { MdOutlineWallet } from "react-icons/md";
import { MdOutlineQrCode2 } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";
import * as toRupiah from "@develoka/angka-rupiah-js";
import BeatLoader from "react-spinners/BeatLoader";

export default function Cart(props: any) {
  const [loading, setLoading] = useState(false);
  const [cash, setCash] = useState(false);
  const [qris, setQris] = useState(false);
  const [wallet, setWallet] = useState(false);
  const [change, setChange] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [paymentChange, setPaymentChange] = useState(0);
  const [userId, setUserId] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState(0);
  const toast = useToast();

  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentAmount(Number(e.target.value));
  };

  const transactionDetail = async (id: number) => {
    try {
      props?.cart?.map(async (el: any) => {
        const res = await axios.post(
          "http://localhost:8000/transaction-detail/create",
          {
            transaction_id: id,
            product_id: el.id,
            qty: el.qty,
            total_price: props.total,
            cart_id: 1,
          }
        );

        return res;
      });
    } catch (err) {
      throw err;
    }
  };

  const transaction = async (
    user_id: number,
    total_price: number,
    total_qty: number,
    payment_method_id: number,
    payment_amount: number,
    payment_change: number,
    total_price_ppn: number
  ) => {
    try {
      if (!!props?.totalPpn === false) {
        toast({
          title: "Can't Process Transaction",
          description: "Cart Empty!",
          status: "warning",
          duration: 2000,
          position: "top-right",
        });
        throw new Error("Error");
      }
      if (!!paymentMethod === false) {
        toast({
          title: "Can't Process Transaction",
          description: "Choose Payment Method!",
          status: "warning",
          duration: 2000,
          position: "top-right",
        });
        throw new Error("Error");
      }
      if (paymentMethod === 1 && !!paymentAmount === false) {
        toast({
          title: "Can't Process Transaction",
          description: "Input Payment Amount!",
          status: "warning",
          duration: 2000,
          position: "top-right",
        });
        throw new Error("Error");
      }

      if (paymentMethod === 1 && paymentChange <= 1) {
        toast({
          title: "Can't Process Transaction",
          description: "Insufficient payment !",
          status: "warning",
          duration: 2000,
          position: "top-right",
        });
        throw new Error("Error");
      }

      const res = await axios.post("http://localhost:8000/transaction/create", {
        user_id,
        total_price,
        total_qty,
        payment_method_id,
        payment_amount,
        payment_change,
        total_price_ppn,
      });

      await transactionDetail(res?.data?.data?.id);
      toast({
        title: "Processing",
        position: "top-right",
        status: "loading",
        duration: 2000,
      });
      await setTimeout(() => setLoading(!loading), 2000);

      await setTimeout(
        () =>
          toast({
            title: "Transaction Done!",
            description: "Thank You So Much!",
            status: "error",
            duration: 4000,
            position: "top-right",
          }),
        2000
      );

      onClose();
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    setPaymentChange(paymentAmount - props.totalPpn);
  }, [paymentAmount, paymentChange]);

  return (
    <VStack
      bgColor={"#FAFAFA"}
      h={"100%"}
      p={"1.5em"}
      borderRadius={"1.5em"}
      align={"stretch"}
      boxShadow={"inner"}
    >
      <VStack spacing={"0.5em"}>
        <Text fontWeight={"700"} fontSize={"large"}>
          Cashier
        </Text>
        <Text fontWeight={"500"}>Budi</Text>
      </VStack>
      <Divider borderColor={"black"} borderWidth={"1px"} mt={"0.5em"} />
      <Text fontWeight={"700"} alignSelf={"flex-start"} fontSize={"large"}>
        Item
      </Text>
      <Box
        overflow={"auto"}
        h={"18em"}
        sx={{
          "&::-webkit-scrollbar": {
            width: "0.5em",
            borderRadius: "0.5em",
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
          "&::-webkit-scrollbar-thumb": {
            height: "1em",
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
            borderRadius: "0.5em",
          },
        }}
      >
        <Grid gap={"1em"} p={".5em"} borderRadius={".5em"}>
          {props?.cart?.map((el: any, index: any) => {
            return (
              <ProductInCart
                {...el}
                cart={props.cart}
                setCart={props.setCart}
                key={index}
                total={props.total}
                setTotal={props.setTotal}
                totalQty={props.totalQty}
                setTotalQty={props.setTotalQty}
                setTotalPpn={props.setTotalPpn}
                totalPpn={props.totalPpn}
              />
            );
          })}
        </Grid>
      </Box>
      <Divider borderColor={"black"} borderWidth={"1px"} />
      <VStack align={"stretch"}>
        <Flex>
          <Text fontWeight={"500"}>Total Sales</Text>
          <Spacer />
          <Text fontWeight={"500"}>{toRupiah(props.total)}</Text>
        </Flex>
        <Flex>
          <Text fontWeight={"500"}>Discount</Text>
          <Spacer />
          <Text fontWeight={"500"}>-{toRupiah(props.diskon)}</Text>
        </Flex>
        <Flex>
          <Text>PPN</Text>
          <Spacer />
          <Text>{toRupiah(props.ppn)}</Text>
        </Flex>
      </VStack>
      <Divider borderColor={"black"} borderWidth={"1px"} />
      <VStack align={"stretch"}>
        <Flex>
          <Text> Total Quantity</Text>
          <Spacer />
          <Text> {props.totalQty} </Text>
        </Flex>
        <Flex align={"stretch"} flexDir={"row"}>
          <Text fontSize={"x-large"} fontWeight={"700"}>
            Total
          </Text>
          <Spacer />
          <Text fontSize={"x-large"} fontWeight={"700"}>
            {toRupiah(props.totalPpn)}
          </Text>
        </Flex>
      </VStack>
      <Spacer />
      <Box>
        <Center>
          <Button
            w={"80%"}
            borderRadius={"0.5em"}
            fontWeight={"bold"}
            onClick={() => {
              setLoading(!loading);
              onOpen();
            }}
            transition="transform .3s"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "lg",
              bgColor: "#F99B2A",
            }}
            bgColor={"#ED1C24"}
            color={"white"}
            _active={{ bgColor: "#ED1C24" }}
          >
            {loading ? (
              <BeatLoader
                cssOverride={override}
                loading={loading}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
                color={"white"}
              />
            ) : (
              "Payment"
            )}
          </Button>
        </Center>
      </Box>
      <Box>
      <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
        <ModalOverlay onClick={() => setLoading(false)} />
        <ModalContent>
          <ModalCloseButton onClick={() => setLoading(false)} />
          <ModalBody>
            <Center>
              <Text fontWeight={"bold"} fontSize={"x-large"}>
                Choose Payment
              </Text>
            </Center>
            <VStack p={"1em"} spacing={"1em"}>
              <Box
                w={"15em"}
                h={"8em"}
                display={"flex"}
                flexDir={"row"}
                _focusVisible={{ color: "red" }}
                borderRadius={"0.5em"}
                bgColor={"#EEF1F2"}
                border={qris ? "solid #F99B2A" : "solid #6D6D6D"}
                boxShadow={"lg"}
                transition={"transform .3s"}
                _hover={{ bgColor: "orange.100", transform: "scale(1.05)" }}
                onClick={() => {
                  setPaymentMethod(2);
                  setPaymentAmount(0);
                  setWallet(false);
                  setCash(false);
                  setChange(false);
                  setQris(!qris);
                }}
              >
                <VStack
                  spacing={"0"}
                  bgColor={qris ? "#FFDAAD" : "transparent"}
                  w={"100%"}
                  borderRadius={".5em"}
                  p={".65em"}
                  cursor={"pointer"}
                >
                  <Box color={qris ? "#F99B2A" : "#6D6D6D"} fontSize={"5em"}>
                    <MdOutlineQrCode2 />
                  </Box>
                  <Box color={qris ? "#F99B2A" : "#6D6D6D"}>
                    <Text as={qris ? "b" : "b"} fontSize={"xl"}>
                      Qris
                    </Text>
                  </Box>
                </VStack>
              </Box>
              <Box
                w={"15em"}
                h={"8em"}
                display={"flex"}
                flexDir={"row"}
                _focusVisible={{ color: "red" }}
                borderRadius={"0.5em"}
                bgColor={"#EEF1F2"}
                border={wallet ? "solid #F99B2A" : "solid #6D6D6D"}
                boxShadow={"lg"}
                transition={"transform .3s"}
                _hover={{ bgColor: "orange.100", transform: "scale(1.05)" }}
                onClick={() => {
                  setCash(false);
                  setQris(false);
                  setChange(false);
                  setWallet(!wallet);
                  setPaymentMethod(3);
                }}
              >
                <VStack
                  spacing={"0"}
                  bgColor={wallet ? "#FFDAAD" : "transparent"}
                  w={"100%"}
                  borderRadius={".5em"}
                  p={".65em"}
                  cursor={"pointer"}
                >
                  <Box color={wallet ? "#F99B2A" : "#6D6D6D"} fontSize={"5em"}>
                    <MdOutlineWallet />
                  </Box>
                  <Box color={wallet ? "#F99B2A" : "#6D6D6D"}>
                    <Text as={wallet ? "b" : "b"} fontSize={"xl"}>
                      E-Wallet
                    </Text>
                  </Box>
                </VStack>
              </Box>
              <Box
                w={"15em"}
                h={"8em"}
                display={"flex"}
                flexDir={"row"}
                _focusVisible={{ color: "red" }}
                borderRadius={"0.5em"}
                bgColor={"#EEF1F2"}
                border={cash ? "solid #F99B2A" : "solid #6D6D6D"}
                boxShadow={"lg"}
                transition={"transform .3s"}
                _hover={{ bgColor: "orange.100", transform: "scale(1.05)" }}
                onClick={() => {
                  setPaymentMethod(1);
                  setWallet(false);
                  setQris(false);
                  setCash(!cash);
                  setChange(!change);
                  setPaymentAmount(0);
                }}
              >
                <VStack
                  spacing={"0"}
                  bgColor={cash ? "#FFDAAD" : "transparent"}
                  w={"100%"}
                  borderRadius={".5em"}
                  p={".65em"}
                  cursor={"pointer"}
                >
                  <Box color={cash ? "#F99B2A" : "#6D6D6D"} fontSize={"5em"}>
                    <FaRegMoneyBillAlt />
                  </Box>
                  <Box color={cash ? "#F99B2A" : "#6D6D6D"}>
                    <Text as={cash ? "b" : "b"} fontSize={"xl"}>
                      Cash
                    </Text>
                  </Box>
                </VStack>
              </Box>
              <Input
                boxShadow={"md"}
                display={change ? "block" : "none"}
                type={"number"}
                placeholder={"Enter Payment Amount"}
                w={"14em"}
                focusBorderColor={"black"}
                value={paymentAmount}
                onChange={handleChange}
                textAlign={"center"}
              />
            </VStack>
          </ModalBody>
          <Divider />
          <Box p={"1em"}>
            <Text textAlign={"left"}>Payment Change : {paymentChange} </Text>
          </Box>
          <Box p={"1em"}>
            <Center>
              <Button
                leftIcon={<FaCheckCircle />}
                type={"submit"}
                onClick={async () => {
                  // setLoading(false);
                  await transaction(
                    userId,
                    props?.total,
                    props?.totalQty,
                    paymentMethod,
                    paymentAmount,
                    paymentChange,
                    props?.totalPpn
                  );
                  await props.setCart([]);
                  props?.setPpn(0);
                  props?.setTotal(0);
                  props?.setTotalPpn(0);
                  setPaymentChange(0);
                  setPaymentAmount(0);
                  props?.setTotalQty(0);
                  onClose();
                }}
                w={"20em"}
                fontWeight={"bold"}
                transition="transform .3s"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "lg",
                  bgColor: "#F99B2A",
                }}
                _active={{ bgColor: "#ED1C24" }}
                bgColor={"#ED1C24"}
                color={"white"}
              >
                Process Order
              </Button>
            </Center>
          </Box>
        </ModalContent>
      </Modal>
      </Box>
    </VStack>
  );
}

