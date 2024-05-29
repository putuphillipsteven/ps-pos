import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import { EditProductModal } from "./component/EditProductModal";
import { CreateProductModal } from "./component/CreateProductModal";
import { FaAngleRight } from "react-icons/fa";

export const AdminProductList = () => {
  const [product, setProduct] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortField, setSortField] =
    useState("product_name");
  const [branchId, setBranchId] = useState(1);
  const [gte, setGte] = useState(0);
  const [lte, setLte] = useState(100);
  const [category, setCategory] = useState<any>([]);
  const [catId, setCatId] = useState(1);
  const [group, setGroup] = useState<any>([]);
  const [groupId, setGroupId] = useState(1);
  const [status, setStatus] = useState<any>([]);
  const [statId, setStatId] = useState(1);
  const [searchName, setSearchName] = useState("");
  const ROUTE: string = import.meta.env
    .VITE_APP_API_BASE_URL;
  const fetchProduct = async (): Promise<any> => {
    try {
      const res = await axios.get(
        `${ROUTE}/product?page=${page}&pageSize=${pageSize}&sortOrder=${sortOrder}&sortField=${sortField}&branch_id=${branchId}&gte=${gte}&lte=${lte}&product_category_id=${catId}&product_group_id=${groupId}&product_name=${searchName}`
      );
      setProduct(res?.data?.result);
    } catch (err) {
      throw err;
    }
  };

  const fetchCategory = async (): Promise<any> => {
    try {
      const res = await axios.get(
        `${ROUTE}/category/category`
      );
      await fetchProduct();
      await setCategory(res?.data?.data);
    } catch (err) {
      throw err;
    }
  };

  const fetchGroup = async () => {
    try {
      const res = await axios.get(
        `${ROUTE}/category/group`
      );
      await fetchProduct();
      await setGroup(res?.data?.data);
    } catch (err) {
      throw err;
    }
  };

  const fetchStatus = async () => {
    try {
      const res = await axios.get(`${ROUTE}/status`);
      await fetchProduct();
      setStatus(res?.data?.data);
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [
    page,
    pageSize,
    groupId,
    catId,
    page,
    sortField,
    sortOrder,
    setGroupId,
    setCatId,
    setSearchName,
    searchName,
  ]);

  useEffect(() => {
    fetchCategory();
  }, [catId]);

  useEffect(() => {
    fetchGroup();
  }, [groupId]);

  useEffect(() => {
    fetchStatus();
  }, [statId]);

  return (
    <Flex
      h={"100%"}
      borderRadius={"1em"}
      padding={""}
      flexDir={"column"}
    >
      <Box alignSelf={"flex-end"}>
        <CreateProductModal
          status={status}
          group={group}
          category={category}
        />
      </Box>
      <Spacer m={".3em 0"} />
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
          <HStack spacing={"1.875em"}>
            <Button
              onClick={() => {
                setCatId(1);
              }}
              variant={"link"}
              _focus={{
                color: "red",
                textDecoration: "underline",
              }}
            >
              Kitchen
            </Button>
            <Button
              onClick={() => {
                setCatId(2);
              }}
              variant={"link"}
              _focus={{
                color: "red",
                textDecoration: "underline",
              }}
            >
              Grocery
            </Button>
          </HStack>
          <Spacer m={".3em"} />
          <Flex w={"100%"}>
            <HStack>
              <Link to={""}>
                <Button
                  w={"7em"}
                  p={"1em"}
                  bg={"#EEF1F2"}
                  size={"sm"}
                  _hover={{
                    bg: "#FFDAAD",
                    color: "#F99B2A",
                    boxShadow: "lg",
                    transform: "scale(1.05)",
                  }}
                  _active={{
                    bg: "#FFDAAD",
                    color: "#F99B2A",
                  }}
                  _focus={{
                    bg: "#FFDAAD",
                    transform: "scale(1.06)",
                    boxShadow: "lg",
                  }}
                  color={"#6D6D6D"}
                  onClick={() => {
                    setGroupId(0);
                    setCatId(0);
                    setSearchName("");
                  }}
                >
                  All
                </Button>
              </Link>
              <Link to={""}>
                <Button
                  color={"#6D6D6D"}
                  w={"7em"}
                  p={"1em"}
                  bg={"#EEF1F2"}
                  size={"sm"}
                  _hover={{
                    bg: "#FFDAAD",
                    color: "#F99B2A",
                    boxShadow: "lg",
                    transform: "scale(1.05)",
                  }}
                  _active={{
                    bg: "#FFDAAD",
                    color: "#F99B2A",
                  }}
                  _focus={{
                    bg: "#FFDAAD",
                    transform: "scale(1.06)",
                    boxShadow: "lg",
                  }}
                  onClick={() => {
                    setGroupId(1);
                  }}
                >
                  Food
                </Button>
              </Link>
              <Link to={""}>
                <Button
                  color={"#6D6D6D"}
                  w={"7em"}
                  p={"1em"}
                  bg={"#EEF1F2"}
                  size={"sm"}
                  _hover={{
                    bg: "#FFDAAD",
                    color: "#F99B2A",
                    boxShadow: "lg",
                    transform: "scale(1.05)",
                  }}
                  _active={{
                    bg: "#FFDAAD",
                    color: "#F99B2A",
                  }}
                  _focus={{
                    bg: "#FFDAAD",
                    transform: "scale(1.06)",
                    boxShadow: "lg",
                  }}
                  onClick={() => {
                    setGroupId(2);
                  }}
                >
                  Beverages
                </Button>
              </Link>
              <Select
                color={"#6D6D6D"}
                bg={"#EEF1F2"}
                size={"sm"}
                borderRadius={".5em"}
                fontWeight={"500"}
                _hover={{
                  bg: "#FFDAAD",
                  color: "#F99B2A",
                  boxShadow: "lg",
                  transform: "scale(1.05)",
                }}
                _active={{
                  bg: "#FFDAAD",
                  color: "#F99B2A",
                }}
                _focus={{
                  bg: "#FFDAAD",
                  transform: "scale(1.06)",
                  boxShadow: "lg",
                }}
                onChange={(e) => {
                  setSortOrder(e.target.value);
                  setSortField("product_name");
                }}
              >
                <option value={"asc"}>Name A-Z</option>
                <option value={"desc"}>Name Z-A</option>
              </Select>
              <Select
                color={"#6D6D6D"}
                fontWeight={"500"}
                bg={"#EEF1F2"}
                size={"sm"}
                borderRadius={".5em"}
                _hover={{
                  bg: "#FFDAAD",
                  color: "#F99B2A",
                  boxShadow: "lg",
                  transform: "scale(1.05)",
                }}
                _active={{
                  bg: "#FFDAAD",
                  color: "#F99B2A",
                }}
                _focus={{
                  bg: "#FFDAAD",
                  transform: "scale(1.06)",
                  boxShadow: "lg",
                }}
                onChange={(e) => {
                  setSortField("product_price");
                  setSortOrder(e.target.value);
                }}
              >
                <option value={"asc"}>Lowest Price</option>
                <option value={"desc"}>
                  Highest Price
                </option>
              </Select>
            </HStack>
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
                    // e.preventDefault();
                    setSearchName(
                      String(
                        (e.target as HTMLInputElement).value
                      )
                    );
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
                      Photo
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
                      SKU
                    </Th>
                    <Th
                      color={"#FEFEFE"}
                      textAlign={"center"}
                    >
                      Category
                    </Th>
                    <Th
                      color={"#FEFEFE"}
                      textAlign={"center"}
                    >
                      Type
                    </Th>
                    <Th
                      color={"#FEFEFE"}
                      textAlign={"center"}
                    >
                      Unit
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
                  {product.map((el, index) => {
                    return (
                      <Tr
                        cursor={"pointer"}
                        key={index}
                        p={".875em"}
                        bgColor={"#FAFAFA"}
                      >
                        <Td textAlign={"center"}>
                          <Flex
                            justifyContent={"center"}
                            alignItems={"center"}
                          >
                            <Image
                              src={`${
                                import.meta.env
                                  .VITE_APP_API_IMAGE_URL
                              }/product/${
                                el?.product_image
                              }`}
                              maxH={"3em"}
                              objectFit={"contain"}
                            />
                          </Flex>
                        </Td>
                        <Td textAlign={"center"}>
                          {el?.product_name}
                        </Td>
                        <Td
                          textAlign={"center"}
                        >{`PSS-CK-${el?.id}`}</Td>
                        <Td textAlign={"center"}>
                          {
                            el?.product_category
                              ?.product_category_name
                          }
                        </Td>
                        <Td textAlign={"center"}>
                          {
                            el?.product_group
                              ?.product_group_name
                          }
                        </Td>
                        <Td textAlign={"center"}>
                          Pieces(pcs)
                        </Td>
                        <Td textAlign={"center"}>
                          <Link to={""}>
                            <EditProductModal
                              {...el}
                              product_status={status}
                              group={group}
                              category={category}
                            />
                          </Link>
                        </Td>
                      </Tr>
                    );
                  })}
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
                    setCatId(0);
                    setGroupId(0);
                  }}
                  onKeyDown={(e: any) => {
                    console.log("CHECK ENTER", e.code);
                    if (e.keyCode == 13) {
                      e.preventDefault();
                      setCatId(0);
                      setGroupId(0);
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
