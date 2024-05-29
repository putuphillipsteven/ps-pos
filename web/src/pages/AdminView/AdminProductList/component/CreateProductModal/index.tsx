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
import { UploadImage } from "./component/UploadImage";
import { IoMdAdd } from "react-icons/io";
export const CreateProductModal = (props: any) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fieldImage, setFieldImage] = useState<
    any | string | null
  >(null);
  const [category, setCategory] = useState(0);
  const [group, setGroup] = useState(0);
  const [status, setStatus] = useState(0);
  const createProduct = async (
    product_name: string,
    product_group_id: string,
    product_category_id: string,
    product_price: string,
    product_description: string,
    product_status_id: string
  ) => {
    try {
      let formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("product_group_id", product_group_id);
      formData.append(
        "product_category_id",
        product_category_id
      );
      formData.append("product_price", product_price);
      formData.append("product_image", fieldImage);
      formData.append(
        "product_description",
        product_description
      );
      formData.append(
        "product_status_id",
        product_status_id
      );
      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_API_BASE_URL}/product`,
        formData
      );
      await onClose();
      toast({
        title: data?.message,
        status: "success",
      });
    } catch (err) {
      throw err;
    }
  };
  const formik = useFormik({
    initialValues: {
      product_name: "",
      product_group_id: "",
      product_category_id: "",
      product_price: "",
      product_image: "",
      product_description: "",
      product_status_id: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values, actions) => {
      createProduct(
        values.product_name,
        String(group),
        String(category),
        values.product_price,
        values.product_description,
        String(status)
      );
      actions.resetForm();
      setFieldImage("");
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
        <Text>Add Product</Text>
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"custom"}
      >
        <ModalOverlay />
        <ModalContent w={"50em"} bg={"#FAFAFA"}>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Box w={"50%"} p={"2em"}>
                <UploadImage
                  fieldImage={fieldImage}
                  setFieldImage={setFieldImage}
                />
              </Box>
              <Spacer />
              <Box p={"2em 2em 2em 0"} w={"50%"}>
                <form onSubmit={formik.handleSubmit}>
                  <VStack align={"stretch"}>
                    <FormLabel htmlFor="product_name">
                      Name
                    </FormLabel>
                    <InputGroup>
                      <Input
                        border={"none"}
                        focusBorderColor={"transparent"}
                        bg={"#EEF1F2"}
                        type="text"
                        id="product_name"
                        name="product_name"
                        size="md"
                        value={formik.values.product_name}
                        onChange={formik.handleChange}
                      />
                    </InputGroup>
                    <FormLabel htmlFor="product_name">
                      <Text>SKU</Text>
                      <Text
                        color={"red.400"}
                        fontSize={".75em"}
                      >
                        This generated automaticly
                      </Text>
                    </FormLabel>
                    <InputGroup>
                      <Input
                        border={"none"}
                        focusBorderColor={"transparent"}
                        bg={"#EEF1F2"}
                        type="text"
                        id="product_name"
                        name="product_name"
                        size="md"
                        placeholder={`PSS-CK-ID`}
                        // isDisabled={true}
                        pointerEvents={"none"}
                      />
                    </InputGroup>
                    <FormLabel htmlFor="product_group_id">
                      Category
                    </FormLabel>
                    <Select
                      borderRadius={"0.5em"}
                      onChange={(e) => {
                        setGroup(Number(e.target.value));
                      }}
                      size={"md"}
                      bg={"#EEF1F2"}
                      border={"none"}
                      focusBorderColor={"transparent"}
                    >
                      <option>Select Category</option>
                      {props?.group?.map(
                        (el: any, index: number) => {
                          return (
                            <option
                              value={el?.id}
                              key={index}
                            >
                              {el?.product_group_name}
                            </option>
                          );
                        }
                      )}
                    </Select>
                    <FormLabel htmlFor="product_category_id">
                      Group
                    </FormLabel>
                    <Select
                      border={"none"}
                      focusBorderColor={"transparent"}
                      bg={"#EEF1F2"}
                      borderRadius={"0.5em"}
                      onChange={(e) => {
                        setCategory(Number(e.target.value));
                      }}
                      size={"md"}
                    >
                      <option>Select Group</option>
                      {props?.category?.map(
                        (el: any, index: number) => {
                          return (
                            <option
                              value={el?.id}
                              key={index}
                            >
                              {el.product_category_name}
                            </option>
                          );
                        }
                      )}
                    </Select>
                    <FormLabel htmlFor="product_price">
                      <Text>Unit</Text>
                      <Text
                        color={"red.400"}
                        fontSize={".75em"}
                      >
                        This generated automaticly
                      </Text>
                    </FormLabel>
                    <InputGroup>
                      <Input
                        type="number"
                        id="product_price"
                        name="product_price"
                        placeholder={`Pieces(pcs)`}
                        bg={"#EEF1F2"}
                        size={"md"}
                        border={"none"}
                        focusBorderColor={"transparent"}
                        pointerEvents={"none"}
                      />
                    </InputGroup>
                    <FormLabel htmlFor="product_price">
                      Price
                    </FormLabel>
                    <InputGroup>
                      <Input
                        bg={"#EEF1F2"}
                        size={"md"}
                        type="number"
                        id="product_price"
                        name="product_price"
                        value={formik.values.product_price}
                        onChange={formik.handleChange}
                        border={"none"}
                        focusBorderColor={"transparent"}
                      />
                    </InputGroup>
                    <FormLabel htmlFor="product_description">
                      Description
                    </FormLabel>
                    <InputGroup>
                      <Input
                        id="product_description"
                        name="product_description"
                        bg={"#EEF1F2"}
                        type="text"
                        size="md"
                        value={
                          formik.values.product_description
                        }
                        onChange={formik.handleChange}
                        border={"none"}
                        focusBorderColor={"transparent"}
                      />
                    </InputGroup>
                    <FormLabel htmlFor="product_status_id">
                      Status
                    </FormLabel>
                    <Select
                      name={"product_status_id"}
                      borderRadius={"0.5em"}
                      onChange={(e) => {
                        setStatus(Number(e.target.value));
                      }}
                      bg={"#EEF1F2"}
                      border={"none"}
                      focusBorderColor={"transparent"}
                    >
                      <option>Select Status</option>
                      {props?.status?.map(
                        (el: any, index: number) => {
                          return (
                            <option
                              value={el?.id}
                              key={index}
                            >
                              {el?.status_name}
                            </option>
                          );
                        }
                      )}
                    </Select>
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
                      w={"50%"}
                      alignSelf={"flex-end"}
                    >
                      Submit
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};
