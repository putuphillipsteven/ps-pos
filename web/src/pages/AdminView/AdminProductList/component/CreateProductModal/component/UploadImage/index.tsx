import {
  AspectRatio,
  Box,
  Heading,
  Input,
  Stack,
  Text,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { MdOutlineFileUpload } from "react-icons/md";
export const UploadImage = (props: any) => {
  function handleChange(e: any) {
    props?.setFieldImage(e.target.files[0]);
  }
  return (
    <Box>
      <AspectRatio ratio={1 / 1}>
        <Box
          borderWidth="0.15em"
          borderStyle={"dashed 1px"}
          borderColor={"red"}
          role="group"
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
                <IconButton
                  aria-label="Call Segun"
                  size={"lg"}
                  fontSize={"2em"}
                  icon={<MdOutlineFileUpload />}
                  bgColor={"transparent"}
                  color={"red.400"}
                />
                <Text fontWeight="bold" color={"red.400"}>
                  Add Image
                </Text>
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
                props?.fieldImage
                  ? URL.createObjectURL(props?.fieldImage)
                  : ""
              }
            />
          </Box>
        </Box>
      </AspectRatio>
    </Box>
  );
};
