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
  Image,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { UploadImage } from "./component/UploadImage";

export const EditProductModal = (props: any) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fieldImage, setFieldImage] = useState<
    any | string | null
  >(null);
  const [category, setCategory] = useState(0);
  const [group, setGroup] = useState(0);
  const [status, setStatus] = useState(1);

  const updateProduct = async (
    product_name: string,
    product_group_id: string,
    product_category_id: string,
    product_price: string,
    product_description: string,
    product_status_id: string
  ) => {
    try {
      let formData = new FormData();
      formData.append(
        "product_name",
        product_name || props?.product_name
      );
      formData.append(
        "product_group_id",
        product_group_id || props?.product_group_id || !0
      );
      formData.append(
        "product_category_id",
        product_category_id ||
          props?.product_category_id ||
          !0
      );
      formData.append("product_price", product_price);
      formData.append(
        "product_image",
        fieldImage || props?.product_image
      );
      formData.append(
        "product_description",
        product_description
      );
      formData.append(
        "product_status_id",
        product_status_id
      );
      const { data } = await axios.patch(
        `${import.meta.env.VITE_APP_API_BASE_URL}/product/${
          props?.id
        }`,
        formData || {
          product_status_id: product_status_id,
        }
      );

      // await toast({
      //   title: `Loading`,
      //   status: "loading",
      //   containerStyle: {
      //     bgColor: "green",
      //     borderRadius: ".5em",
      //   },
      // });

      await toast({
        title: `${data?.message}`,
        status: "success",
        containerStyle: {
          bgColor: "green",
          borderRadius: ".5em",
        },
      });

      onClose();
    } catch (err: Error | any) {
      toast({
        title: `${err?.message}`,
        status: "error",
      });
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
      console.log(values.product_name);
      updateProduct(
        values.product_name ||
          props?.product_name ||
          formik.values.product_name,
        Number(group) ||
          props?.product_group_id ||
          formik.values.product_group_id ||
          props?.group,
        Number(category) ||
          props?.product_category_id ||
          formik.values.product_category_id ||
          props?.category,
        values.product_price ||
          props?.product_price ||
          formik.values.product_price,
        values.product_description ||
          props?.product_description ||
          formik.values.product_description,
        Number(status) ||
          props?.product_status_id ||
          formik.values.product_status_id
      );
      actions.resetForm();
      setFieldImage("");
    },
  });
  return (
    <Box>
      <Button
        variant={"link"}
        fontSize={"1em"}
        onClick={onOpen}
        fontWeight={"500"}
      >
        <Text>Edit Product</Text>
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"custom"}
      >
        <ModalOverlay />
        <ModalContent w={"50em"}>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <Box w={"50%"} p={"2em"}>
                <Flex
                  w={"100%"}
                  h={"100%"}
                  align={"stretch"}
                  flexDir={"column"}
                >
                  <Text fontWeight={"bold"}>
                    Foto Produk
                  </Text>
                  <Spacer />
                  <Image
                    w={"100%"}
                    src={`${
                      import.meta.env.VITE_APP_API_IMAGE_URL
                    }/product/${props?.product_image}`}
                  />
                  <Spacer />
                  <UploadImage
                    fieldImage={fieldImage}
                    setFieldImage={setFieldImage}
                  />
                </Flex>
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
                        bg={"#EEF1F2"}
                        size={"md"}
                        border={"none"}
                        focusBorderColor={"transparent"}
                        type="text"
                        id="product_name"
                        name="product_name"
                        placeholder={`${props?.product_name}`}
                        value={formik.values.product_name}
                        onChange={formik.handleChange}
                      />
                    </InputGroup>
                    <FormLabel htmlFor="product_group_id">
                      Product Group
                    </FormLabel>
                    <Select
                      borderRadius={"0.5em"}
                      onChange={(e) => {
                        setGroup(Number(e.target.value));
                      }}
                      bg={"#EEF1F2"}
                      size={"md"}
                      border={"none"}
                      focusBorderColor={"transparent"}
                    >
                      <option>
                        {
                          props?.product_group
                            ?.product_group_name
                        }
                      </option>
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
                      Product Category
                    </FormLabel>
                    <Select
                      borderRadius={"0.5em"}
                      onChange={(e) => {
                        setCategory(Number(e.target.value));
                      }}
                      bg={"#EEF1F2"}
                      size={"md"}
                      border={"none"}
                      focusBorderColor={"transparent"}
                    >
                      <option>
                        {
                          props?.product_category
                            ?.product_category_name
                        }
                      </option>
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
                      Product Price
                    </FormLabel>

                    <InputGroup>
                      <Input
                        bg={"#EEF1F2"}
                        size={"md"}
                        border={"none"}
                        focusBorderColor={"transparent"}
                        type="number"
                        id="product_price"
                        name="product_price"
                        placeholder={`${props?.product_price}`}
                        value={formik.values.product_price}
                        onChange={formik.handleChange}
                      />
                    </InputGroup>
                    <FormLabel htmlFor="product_description">
                      Product Description
                    </FormLabel>

                    <InputGroup>
                      <Textarea
                        bg={"#EEF1F2"}
                        size={"md"}
                        border={"none"}
                        focusBorderColor={"transparent"}
                        id="product_description"
                        name="product_description"
                        value={
                          formik.values.product_description
                        }
                        placeholder={`${props?.product_description}`}
                        onChange={formik.handleChange}
                      />
                    </InputGroup>
                    <FormLabel htmlFor="product_status_id">
                      Product Status
                    </FormLabel>
                    <Select
                      bg={"#EEF1F2"}
                      size={"md"}
                      border={"none"}
                      focusBorderColor={"transparent"}
                      name={"product_status_id"}
                      borderRadius={"0.5em"}
                      onChange={(e) => {
                        setStatus(Number(e.target.value));
                      }}
                    >
                      <option>
                        {props?.status?.status_name}
                      </option>
                      {props?.product_status?.map(
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
