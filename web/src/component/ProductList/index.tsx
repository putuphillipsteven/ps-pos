import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { ProductCard } from "../ProductCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";

export const ProductList = (props: any) => {
  const [gte, setGte] = useState(0);
  const [lte, setLte] = useState(100);
  const [category, setCategory] = useState<any>([]);
  const [catId, setCatId] = useState(1);
  const [group, setGroup] = useState<any>([]);
  const [groupId, setGroupId] = useState(1);
  const [branchId, setBranchId] = useState(1);
  const [product, setProduct] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortOrder, setSortOrder] = useState("");
  const [sortField, setSortField] = useState("product_name");
  const [search, setSearch] = useState("");
  const [searchName, setSearchName] = useState("");   
  const ROUTE: string = import.meta.env.VITE_APP_API_BASE_URL;

  const fetchProduct = async (): Promise<any> => {
    try {
      const res = await axios.get(
        `${ROUTE}/product?page=${page}&pageSize=${pageSize}&sortOrder=${sortOrder}&sortField=${sortField}&branch_id=${branchId}&gte=${gte}&lte=${lte}&product_category_id=${catId}&product_group_id=${groupId}&product_name=${searchName}`
      );
      console.log("--Fetching--");
      setProduct(res?.data?.result);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [
    page,
    pageSize,
    sortOrder,
    sortField,
    setGroupId,
    groupId,
    setCatId,
    catId,
  ]);

  return (
    <Box
      bgColor={"#FFFFFF"}
      h={"100%"}
      borderRadius={"1.5em"}
      p={"1.5em"}
      boxShadow={"inner"}
    >
      <Flex flexDir={"column"} h={"100%"}>
        <HStack spacing={"1.875em"}>
          <Button
            onClick={() => {
              setCatId(1);
            }}
            variant={"link"}
            _focus={{ color: "red", textDecoration: "underline" }}
          >
            Kitchen
          </Button>
          <Button
            onClick={() => {
              setCatId(2);
            }}
            variant={"link"}
            _focus={{ color: "red", textDecoration: "underline" }}
          >
            Grocery
          </Button>
        </HStack>
        <Spacer />
        <HStack spacing={"1em"}>
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
              onClick={() => {
                setGroupId(0);
              }}
            >
              All
            </Button>
          </Link>
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
              _active={{ bg: "#FFDAAD", color: "#F99B2A" }}
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
              _active={{ bg: "#FFDAAD", color: "#F99B2A" }}
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
          <Spacer />
          <HStack>
            <Select
              w={"8em"}
              size={"sm"}
              borderRadius={"0.5em"}
              cursor={"pointer"}
              onChange={(e) => {
                setSortField("product_name");
                setSortOrder(e.target.value);
              }}
            >
              <option value={"asc"}>Name A-Z</option>
              <option value={"desc"}>Name Z-A</option>
            </Select>
            <Select
              w={"8em"}
              size={"sm"}
              borderRadius={"0.5em"}
              cursor={"pointer"}
              onChange={(e) => {
                setSortField("product_price");
                setSortOrder(e.target.value);
              }}
            >
              <option value={"asc"}>Lowest Price</option>
              <option value={"desc"}>Highest Price</option>
            </Select>
          </HStack>
        </HStack>
        <Spacer />
        <InputGroup>
          <InputLeftElement color={"#6D6D6D"} pointerEvents="none">
            <IoIosSearch />
          </InputLeftElement>
          <Input
            type="text"
            borderRadius={"1.25em"}
            bg={"#EEF1F2"}
            border={"none"}
            focusBorderColor={"transparent"}
            onChange={(event) => setSearch(event.target.value)}
            boxShadow={"md"}
            _focus={{ boxShadow: "md" }}
          />
        </InputGroup>
        <Spacer />
        <Grid
          borderRadius={"1em"}
          boxShadow={"inner"}
          gap={"1.5em"}
          gridTemplateColumns={"repeat(3, 1fr)"}
          h={"24em"}
          overflow={"auto"}
          p={"1em .5em"}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {product
            .filter((el) => {
              if (search === "") {
                return el;
              } else if (
                el.product_name.toLowerCase().includes(search.toLowerCase())
              ) {
                return el;
              }
            })
            .map((el, index) => (
              <ProductCard
                key={index}
                {...el}
                cart={props.cart}
                setCart={props.setCart}
                total={props.total}
                setTotal={props.setTotal}
                handlePlus={props.handlePlus}
                totalQty={props.totalQty}
                setTotalQty={props.setTotalQty}
              />
            ))}
        </Grid>
        <Spacer />
        <Box
          overflow={"hidden"}
          bgColor={"#FAFAFA"}
          p={".875em"}
          borderRadius={"1em"}
        >
          <Flex justifyContent={"center"} alignItems={"center"} w={"28em"}>
            <Flex fontWeight={"bold"}>
              <Box>
                <Text>Page</Text>
              </Box>
              <Spacer />
              <Button
                _active={{ color: "#ED1C24" }}
                _focus={{ color: "#ED1C24" }}
                onClick={(e) => {
                  setPage(Number((e.target as HTMLInputElement).value));
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
                  setPage(Number((e.target as HTMLInputElement).value));
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
                  setPage(Number((e.target as HTMLInputElement).value));
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
                  setPage(Number((e.target as HTMLInputElement).value));
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
                  setPage(Number((e.target as HTMLInputElement).value));
                }}
                variant={"link"}
                value={5}
              >
                5
              </Button>
              <Button
                _active={{ color: "#ED1C24" }}
                _focus={{ color: "#ED1C24" }}
                onClick={(e) => {
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
                      setPage(Number((e.target as HTMLInputElement).value));

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
        </Box>
      </Flex>
    </Box>
  );
};
