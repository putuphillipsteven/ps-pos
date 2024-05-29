import {
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormLabel,
  InputGroup,
  Input,
  VStack,
  Flex,
  Spacer,
  Select,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { IoMdAdd } from "react-icons/io";
export const CreateCategoryModal = (props: any) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const createCategory = async (
    product_category_name: string
  ) => {
    try {
      // let formData = new FormData();
      // formData.append(
      //   "product_category_name",
      //   product_category_name
      // );
      const result = await axios.post(
        `${
          import.meta.env.VITE_APP_API_BASE_URL
        }/category/category`,
        {
          product_category_name: product_category_name,
        }
      );
      console.log(result);
      await onClose();
      toast({
        title: "result",
        status: "success",
      });
    } catch (err) {
      throw err;
    }
  };
  const formik = useFormik({
    initialValues: {
      product_category_name: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values, actions) => {
      createCategory(values.product_category_name);
      actions.resetForm();
    },
  });
  return (
    <Box>
      <Button
        variant={"button"}
        color={"unpureWhite.50"}
        fontSize={"1em"}
        onClick={onOpen}
        fontWeight={"bold"}
        bgColor={"red.400"}
      >
        <IoMdAdd />
        <Text>Add Category</Text>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={"50em"}>
          <ModalCloseButton />
          <ModalBody>
            <Box p={"2em 2em 2em 0"}>
              <form onSubmit={formik.handleSubmit}>
                <VStack align={"stretch"}>
                  <FormLabel htmlFor="product_category_name">
                    Product Category Name
                  </FormLabel>
                  <InputGroup>
                    <Input
                      id="product_category_name"
                      name="product_category_name"
                      value={
                        formik.values.product_category_name
                      }
                      onChange={formik.handleChange}
                      bg={"#EEF1F2"}
                      type="text"
                      size="md"
                      border={"none"}
                      focusBorderColor={"transparent"}
                    />
                  </InputGroup>
                  <Button
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
                    type="submit"
                    alignSelf={"flex-end"}
                  >
                    Submit
                  </Button>
                </VStack>
              </form>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
