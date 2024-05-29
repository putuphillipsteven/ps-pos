import {
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  useDisclosure,
  Button,
  Center,
  AspectRatio,
  Stack,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiNotification3Fill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import axios from "axios";

export const NavBar = (props?: any | null) => {
  const toast = useToast();
  const [fieldImage, setFieldImage] = useState<
    any | string | null
  >(null);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");
  useEffect(() => {
    setTime(`${date.getHours()}:${date.getMinutes()}`);
  });
  useEffect(() => {
    setDay(
      `${days[date.getDay()]}, ${date.getDate()} ${
        months[date.getMonth()]
      } ${date.getFullYear()}`
    );
    props?.setDay(`${days[date.getDay()]}`);
  });

  function handleChange(e: any) {
    setFieldImage(e.target.files[0]);
  }

  const updateProfile = async () => {
    try {
      let formData = new FormData();
      formData.append("image", fieldImage);
      const { data } = await axios.patch(
        `${
          import.meta.env.VITE_APP_API_BASE_URL
        }/profile/1`,
        formData
      );
      toast({
        title: data?.message,
        status: "error",
      });
      setFieldImage("");
      await onClose();
    } catch (err) {
      toast({
        title: "Upload Error",
        description: "File Too Large",
        status: "warning",
      });
      setFieldImage("");
    }
  };

  return (
    <Flex
      w={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
      p={"0 .5em 0 0"}
      zIndex={100}
    >
      <HStack>
        <Text fontWeight={"bold"}>{time}</Text>
        <Text>{day}</Text>
      </HStack>
      <Spacer />
      <HStack spacing={"1em"}>
        <Box
          borderRadius={"50%"}
          bgColor={"#FAFAFA"}
          p={".5em"}
        >
          <RiNotification3Fill />
        </Box>

        <Box borderRadius={"50%"} p={".5em"}>
          <Box overflow={"hidden"} onClick={onOpen}>
            <Image
              src={`${
                import.meta.env.VITE_APP_API_IMAGE_URL
              }/profile/product_2023_10_19_logo ratan.png`}
              borderRadius={"50%"}
              boxSize={"2em"}
            />
          </Box>
        </Box>
        <VStack
          spacing={"0"}
          align={"flex-start"}
          lineHeight={"1"}
        >
          <Text fontWeight={"bold"}>Budi</Text>
          <Text fontSize={".75em"}>Cashier</Text>
        </VStack>
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            onClick={() => setFieldImage("")}
          />
          <Center>
            <Text
              fontWeight={"bold"}
              fontSize={"x-large"}
              p={"1em"}
            >
              Update Profile Picture
            </Text>
          </Center>
          <ModalBody p={"2em"}>
            <Center>
              <Text fontSize={"sm"} fontWeight={"light"}>
                File type allowed are .jpg .png .jpeg .gif
              </Text>
            </Center>
            <Center>
              <Text fontSize={"sm"} fontWeight={"light"}>
                File type allowed are .jpg .png .jpeg .gif
              </Text>
            </Center>
            <Center>
              <Box
                w={"15em"}
                boxShadow={"lg"}
                borderRadius={".5em"}
              >
                <AspectRatio ratio={1 / 1}>
                  <Box
                    borderWidth={"0.15em"}
                    border={"solid red 1px"}
                    borderColor={"red"}
                    role={"group"}
                    borderRadius={".5em"}
                  >
                    <Box
                      position="relative"
                      height="100%"
                      width="100%"
                    >
                      <Box
                        position="absolute"
                        top="0"
                        left="0"
                        height="100%"
                        width="100%"
                        display="flex"
                        flexDirection="column"
                      >
                        <Stack
                          height="100%"
                          width="100%"
                          display="flex"
                          alignItems="center"
                          justify="center"
                          spacing="4"
                        >
                          <Stack
                            p="8"
                            textAlign="center"
                            spacing="1"
                            style={
                              fieldImage
                                ? { display: "none" }
                                : { display: "block" }
                            }
                          >
                            <Text
                              fontSize="md"
                              color="black"
                              fontWeight="500"
                            >
                              Drop images here
                            </Text>
                            <Text fontWeight="light">
                              click to upload
                            </Text>
                          </Stack>
                        </Stack>
                      </Box>
                      <Input
                        type="file"
                        height="100%"
                        width="100%"
                        position="absolute"
                        bgColor={"red"}
                        top="0"
                        left="0"
                        opacity="0"
                        aria-hidden="true"
                        accept="image/*"
                        cursor={"pointer"}
                        onChange={handleChange}
                      />
                      <Image
                        w={"100%"}
                        transform={"scale(1.1)"}
                        src={
                          fieldImage
                            ? URL.createObjectURL(
                                fieldImage
                              )
                            : ""
                        }
                      />
                    </Box>
                  </Box>
                </AspectRatio>
              </Box>
            </Center>
            <Center>
              <Box mt={".5em"}>
                <Center>
                  <Button
                    display={fieldImage ? "block" : "none"}
                    onClick={() => setFieldImage("")}
                    size={"xs"}
                    colorScheme={"red"}
                    boxShadow={"lg"}
                  >
                    Reset
                  </Button>
                </Center>
              </Box>
            </Center>
          </ModalBody>

          <Box p={"1em"}>
            <Center>
              <Button
                color={"darkgrey.500"}
                leftIcon={<FaCheckCircle />}
                onClick={async () => {
                  await updateProfile();
                }}
                w={"15em"}
                boxShadow={"md"}
                size={"md"}
              >
                Submit
              </Button>
            </Center>
          </Box>
        </ModalContent>
      </Modal>
    </Flex>
  );
};
