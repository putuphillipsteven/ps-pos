import {
  Box,
  Flex,
  Image,
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
import { CreateCategoryModal } from "./component/CreateCategoryModal";
import { EditCategoryModal } from "./component/EditCategoryModal";

export const Category = (props: any) => {
  const [category, setCategory] = useState<any>([]);
  const ROUTE: string = import.meta.env
    .VITE_APP_API_BASE_URL;
  const fetchCategory = async (): Promise<any> => {
    try {
      const res = await axios.get(
        `${ROUTE}/category/category`
      );
      await setCategory(res?.data?.data);
    } catch (err) {
      throw err;
    }
  };
  useEffect(() => {
    fetchCategory();
  }, [setCategory]);
  console.log("CATEGORY", category);
  return (
    <Box
      w={"100%"}
      h={"100%"}
      bgColor={"#FFFFFF"}
      borderRadius={"1.5em"}
      p={"1.5em"}
    >
      <Flex flexDir={"column"}>
        <Box alignSelf={"flex-end"}>
          <CreateCategoryModal />
        </Box>
        <Spacer m={".5em 0"} />
        <Box
          h={"25em"}
          overflow={"auto"}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <TableContainer>
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
                    Category Id
                  </Th>
                  <Th
                    color={"#FEFEFE"}
                    textAlign={"center"}
                  >
                    Name
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
                {category?.map((el: any, index: number) => {
                  return (
                    <Tr
                      w={"10px"}
                      cursor={"pointer"}
                      key={index}
                      p={".875em"}
                      bgColor={"#FAFAFA"}
                    >
                      <Td textAlign={"center"}>{el?.id}</Td>
                      <Td textAlign={"center"}>
                        {el?.product_category_name}
                      </Td>
                      <Td textAlign={"center"}>
                        <EditCategoryModal {...el} />
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </Box>
  );
};
