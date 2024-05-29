import {
  Box,
  Button,
  Divider,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { ImStatsBars } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";
import {
  FaAngleRight,
  FaCaretLeft,
  FaCaretRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
// @ts-ignore
import * as toRupiah from "@develoka/angka-rupiah-js";
import ProductInCart from "../../../component/ProductInCart";

export const Report = () => {
  const [transaction, setTransaction] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const date = new Date();
  const [tDate, setTDate] = useState(date.getDate());
  const [tNextDate, setTNextDate] = useState(
    date.getDate() + 1
  );
  const [tMonth, setTMonth] = useState(date.getMonth() + 1);
  const [tYear, setTYear] = useState(date.getFullYear());
  useEffect(() => {
    setTDate(date.getDate());
  }, []);
  useEffect(() => {
    setTMonth(date.getMonth());
  }, []);
  useEffect(() => {
    setTYear(date.getFullYear());
  }, []);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const fetchTransactions = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/transaction?page=${page}&pageSize=${pageSize}&startDate=${tYear}-${
          tMonth + 1
        }-${tDate}&endDate=${tYear}-${
          tMonth + 1
        }-${tNextDate}`
      );
      setTransaction(res?.data?.data);
      setPageSize(10);
    } catch (err) {
      throw err;
    }
  };
  const [show, setShow] = useState<any>({});
  const toggleShow = (id: number) => () => {
    setShow((set: any) => ({
      ...set,
      [id]: !set[id],
    }));
  };
  useEffect(() => {
    fetchTransactions();
  }, [page, pageSize, tDate, tNextDate]);
  return (
    <Flex
      h={"100%"}
      borderRadius={"1em"}
      padding={""}
      flexDir={"column"}
    >
      <Flex>
        <Box
          bg={"#FFFFFF"}
          p={"1em"}
          borderRadius={"1em"}
          w={"30%"}
        >
          <Flex flexDir={"column"}>
            <Text
              w={"80%"}
              fontSize={".75em"}
              fontWeight={"bold"}
            >
              Total Transaction Today
            </Text>
            <Flex align={"center"}>
              <Text fontWeight={"bold"}>
                {transaction?.length}
              </Text>
              <Spacer />
              <Box color={"green"}>
                <ImStatsBars />
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box
          bg={"#FFFFFF"}
          p={"1em"}
          borderRadius={"1em"}
          w={"20%"}
        >
          <Flex flexDir={"column"}>
            <Text
              w={"80%"}
              fontSize={".75em"}
              fontWeight={"bold"}
            >
              Total Transaction Today
            </Text>
            <Flex align={"center"}>
              <Text fontWeight={"bold"}>
                {transaction?.length}
              </Text>
              <Spacer />
              <Box color={"green"}>
                <ImStatsBars />
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box
          bg={"#FFFFFF"}
          p={"1em"}
          borderRadius={"1em"}
          w={"20%"}
        >
          <Flex flexDir={"column"}>
            <Text
              w={"80%"}
              fontSize={".75em"}
              fontWeight={"bold"}
            >
              Total Transaction Today
            </Text>
            <Flex align={"center"}>
              <Text fontWeight={"bold"}>
                {transaction?.length}
              </Text>
              <Spacer />
              <Box color={"green"}>
                <ImStatsBars />
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box
          bg={"#FFFFFF"}
          p={"1em"}
          borderRadius={"1em"}
          w={"20%"}
        >
          <Flex flexDir={"column"}>
            <Text
              w={"80%"}
              fontSize={".75em"}
              fontWeight={"bold"}
            >
              Total Transaction Today
            </Text>
            <Flex align={"center"}>
              <Text fontWeight={"bold"}>
                {transaction?.length}
              </Text>
              <Spacer />
              <Box color={"green"}>
                <ImStatsBars />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Spacer m={".5em 0"} />
      <Box
        bgColor={"#FFFFFF"}
        h={"100%"}
        borderRadius={"1.5em"}
        p={"1.5em"}
      >
        <Flex
          bg={"#FFFFFF"}
          h={"100%"}
          borderRadius={"1em"}
          flexDir={"column"}
        >
          <Spacer />
          <Flex w={"100%"}>
            <Flex align={"center"}>
              <IconButton
                onClick={() => {
                  setTDate(tDate - 1);
                  setTNextDate(tNextDate - 1);
                }}
                aria-label=""
                color={"#fafafa"}
                backgroundColor={"red.400"}
                _hover={{ bg: "red.400" }}
                icon={<FaCaretLeft />}
                fontSize={"2em"}
                borderRadius={".3em 0  0 .3em"}
              />
              <Input
                color={"#6D6D6D"}
                w={"11em"}
                size="md"
                type="text"
                textAlign={"center"}
                placeholder={`${tDate}-${months[tMonth]}-${tYear}`}
                border={"1px solid #6D6D6D"}
                borderLeft={"0"}
                borderRight={"0"}
                borderRadius={"0"}
                pointerEvents={"none"}
              />

              <IconButton
                aria-label=""
                fontSize={"2em"}
                icon={<FaCaretRight />}
                color={"#fafafa"}
                onClick={() => {
                  setTDate(tDate + 1);
                  setTNextDate(tNextDate + 1);
                }}
                backgroundColor={"red.400"}
                _hover={{ bg: "red.400" }}
                borderRadius={"0 0.3em  .3em 0"}
              />
            </Flex>
            <Spacer />
            <InputGroup w={"11em"}>
              <InputLeftElement
                color={"#6D6D6D"}
                pointerEvents="none"
              >
                <IoIosSearch />
              </InputLeftElement>
              <Input
                type="text"
                borderRadius={"1.25em"}
                bg={"#EEF1F2"}
                border={"none"}
                focusBorderColor={"transparent"}
                onKeyDown={(e: any) => {
                  if (e.keyCode == 13) {
                    e.currentTarget.value = "";
                  }
                }}
              />
            </InputGroup>
          </Flex>
          <Spacer m={".3em"} />
          <Box
            h={"25em"}
            overflowX={"scroll"}
            overflowY={"scroll"}
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <TableContainer w={"100%"}>
              <Table
                variant={"simple"}
                style={{
                  borderCollapse: "separate",
                  borderSpacing: "0 .5em",
                  padding: "0",
                  borderRadius: ".5em",
                  overflow: "hidden",
                }}
              >
                <Thead
                  bg={"#ED1C24"}
                  position={"relative"}
                  top={"-.5em"}
                >
                  <Tr>
                    <Th
                      color={"#FEFEFE"}
                      textAlign={"center"}
                    >
                      Transaction No
                    </Th>
                    <Th
                      color={"#FEFEFE"}
                      textAlign={"center"}
                    >
                      Name
                    </Th>
                    <Th
                      color={"#FEFEFE"}
                      textAlign={"center"}
                    >
                      Date & Time
                    </Th>
                    <Th
                      color={"#FEFEFE"}
                      textAlign={"center"}
                    >
                      Payment
                    </Th>
                    <Th
                      color={"#FEFEFE"}
                      textAlign={"center"}
                    >
                      Amount
                    </Th>
                    <Th
                      color={"#FEFEFE"}
                      textAlign={"center"}
                    >
                      Cashier
                    </Th>
                    <Th textAlign={"center"}></Th>
                  </Tr>
                </Thead>
                <Tbody
                  position={"relative"}
                  top={"-.5em"}
                  color={"#6D6D6D"}
                  fontWeight={"500"}
                >
                  {transaction?.map(
                    (el: any, index: number) => {
                      return (
                        <>
                          <Tr
                            cursor={"pointer"}
                            key={index}
                            p={".875em"}
                            bgColor={"#FAFAFA"}
                          >
                            <Td textAlign={"center"}>
                              {`PSS-CK-${el?.id}`}
                            </Td>
                            <Td textAlign={"center"}>
                              {el?.customer_name
                                ? el?.customer_name
                                : "Customer"}
                            </Td>
                            <Td textAlign={"center"}>
                              {`${
                                (el?.date).split("T")[0]
                              }`}
                            </Td>
                            <Td textAlign={"center"}>
                              {
                                el?.payment_method
                                  ?.method_name
                              }
                            </Td>
                            <Td textAlign={"center"}>
                              {toRupiah(
                                el?.total_price_ppn
                              )}
                            </Td>
                            <Td textAlign={"center"}>
                              {
                                (el?.user?.full_name).split(
                                  " "
                                )[0]
                              }
                            </Td>
                            <Td
                              textAlign={"center"}
                              onClick={toggleShow(el?.id)}
                            >
                              <Flex align={"center"}>
                                <Text color={"#F99B2A"}>
                                  Details
                                </Text>
                                <IconButton
                                  aria-label=""
                                  bg={"transparent"}
                                  color={"#F99B2A"}
                                  size={"sm"}
                                  _hover={{
                                    bg: "transparent",
                                  }}
                                  icon={
                                    show[el?.id] ? (
                                      <FaChevronUp />
                                    ) : (
                                      <FaChevronDown />
                                    )
                                  }
                                />
                              </Flex>
                            </Td>
                          </Tr>
                          <Tr
                            display={
                              show[el?.id] ? "" : "none"
                            }
                          >
                            <Td
                              colSpan={7}
                              color={"#1C1D21"}
                            >
                              <Flex w={"100%"}>
                                <Box w={"50%"} h={"100%"}>
                                  <VStack align={"stretch"}>
                                    <Text>Item</Text>
                                    {el?.transaction_detail.map(
                                      (el: any) => {
                                        return (
                                          <Box w={"100%"}>
                                            <ProductInCart
                                              display={
                                                "none"
                                              }
                                              product_name={
                                                el?.product
                                                  ?.product_name
                                              }
                                              qty={1}
                                              product_price={
                                                el?.product
                                                  ?.product_price
                                              }
                                              image={
                                                el?.product
                                                  ?.product_image
                                              }
                                            />
                                          </Box>
                                        );
                                      }
                                    )}
                                  </VStack>
                                </Box>
                                <Spacer m={"0 .5em"} />
                                <Box w={"50%"}>
                                  <VStack
                                    flexDir={"column"}
                                    align={"stretch"}
                                  >
                                    <Divider
                                      borderColor={"black"}
                                      borderWidth={"1px"}
                                    />
                                    <Flex>
                                      <Text
                                        fontWeight={"500"}
                                      >
                                        Total Sales
                                      </Text>
                                      <Spacer />
                                      <Text
                                        fontWeight={"500"}
                                      >
                                        {toRupiah(
                                          el?.total_price_ppn
                                        )}
                                      </Text>
                                    </Flex>
                                    <Flex>
                                      <Text
                                        fontWeight={"500"}
                                      >
                                        Total Diskon
                                      </Text>
                                      <Spacer />
                                      <Text
                                        fontWeight={"500"}
                                      >
                                        {el?.diskon
                                          ? ""
                                          : toRupiah("0")}
                                      </Text>
                                    </Flex>
                                    <Flex>
                                      <Text>DPP</Text>
                                      <Spacer />
                                      <Text>
                                        {toRupiah(
                                          el?.total_price
                                        )}
                                      </Text>
                                    </Flex>
                                    <Flex>
                                      <Text>PPN</Text>
                                      <Spacer />
                                      <Text>
                                        {toRupiah(
                                          el?.total_price_ppn -
                                            el?.total_price
                                        )}
                                      </Text>
                                    </Flex>
                                    <Divider
                                      borderColor={"black"}
                                      borderWidth={"1px"}
                                    />
                                    <Flex
                                      fontWeight={"bold"}
                                    >
                                      <Text>Total</Text>
                                      <Spacer />
                                      <Text>
                                        {toRupiah(
                                          el?.total_price_ppn
                                        )}
                                      </Text>
                                    </Flex>
                                  </VStack>
                                </Box>
                              </Flex>
                            </Td>
                          </Tr>
                        </>
                      );
                    }
                  )}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
          <Spacer />
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            w={"28em"}
          >
            <Flex fontWeight={"bold"}>
              <Box>
                <Text>Page</Text>
              </Box>
              <Spacer />
              <Button
                _active={{ color: "#ED1C24" }}
                _focus={{ color: "#ED1C24" }}
                onClick={(e) => {
                  setPage(
                    Number(
                      (e.target as HTMLInputElement).value
                    )
                  );
                }}
                variant={"link"}
                value={1}
              >
                1
              </Button>
              <Button
                _active={{ color: "#ED1C24" }}
                _focus={{ color: "#ED1C24" }}
                onClick={(e) => {
                  setPage(
                    Number(
                      (e.target as HTMLInputElement).value
                    )
                  );
                }}
                variant={"link"}
                value={2}
              >
                2
              </Button>
              <Spacer />
              <Button
                _active={{ color: "#ED1C24" }}
                _focus={{ color: "#ED1C24" }}
                onClick={(e) => {
                  setPage(
                    Number(
                      (e.target as HTMLInputElement).value
                    )
                  );
                }}
                variant={"link"}
                value={3}
              >
                3
              </Button>
              <Spacer />
              <Button
                _active={{ color: "#ED1C24" }}
                _focus={{ color: "#ED1C24" }}
                onClick={(e) => {
                  setPage(
                    Number(
                      (e.target as HTMLInputElement).value
                    )
                  );
                }}
                variant={"link"}
                value={4}
              >
                4
              </Button>
              <Spacer />
              <Button
                _active={{ color: "#ED1C24" }}
                _focus={{ color: "#ED1C24" }}
                onClick={(e) => {
                  setPage(
                    Number(
                      (e.target as HTMLInputElement).value
                    )
                  );
                }}
                variant={"link"}
                value={5}
              >
                5
              </Button>
              <Button
                _active={{ color: "#ED1C24" }}
                _focus={{ color: "#ED1C24" }}
                onClick={() => {
                  setPage(page + 1);
                }}
                variant={"link"}
                value={5}
              >
                <FaAngleRight />
              </Button>
            </Flex>
            <Spacer />
            <Box>
              <form>
                <Input
                  textAlign={"center"}
                  type="number"
                  borderRadius={".5em"}
                  bg={"#EEF1F2"}
                  border={"none"}
                  w={"2.5em"}
                  color={"#6D6D6D"}
                  fontWeight={"500"}
                  focusBorderColor={"transparent"}
                  p={".5em"}
                  onChange={() => {
                    // setCatId(0);
                    // setGroupId(0);
                  }}
                  onKeyDown={(e: any) => {
                    if (e.keyCode == 13) {
                      e.preventDefault();
                      setPage(
                        Number(
                          (e.target as HTMLInputElement)
                            .value
                        )
                      );

                      e.currentTarget.value = "";
                    }
                  }}
                />
              </form>
            </Box>
            <Spacer />
            <Box>
              <Text color={"#6D6D6D"} fontWeight={"500"}>
                of 5 pages
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
