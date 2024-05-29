import { Box, Image, VStack } from "@chakra-ui/react";
import cklogo from "./components/cklogo.png";
import { useState } from "react";
import { SidebarBox } from "./components/SidebarBox";
import { BsLaptop } from "react-icons/bs";
import {
  TbBoxSeam,
  TbCategory2,
  TbReport,
} from "react-icons/tb";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
export default function SideBar() {
  const [order, setOrder] = useState(false);
  const [transaction, setTransaction] = useState(false);
  const [inventory, setInventory] = useState(false);
  const [logout, setLogout] = useState(false);
  return (
    <VStack
      top={"0"}
      w={"100%"}
      h={"100%"}
      bgColor={"red.400"}
      p={"3em 1em 1em 1em"}
      spacing={"3.75em"}
    >
      <Box>
        <Image src={cklogo} w={"9.75em"} />
      </Box>
      <VStack
        w={"100%"}
        spacing={"1.5em"}
        align={"flex-end"}
      >
        <SidebarBox
          text={"Dashboard"}
          icon={<BsLaptop />}
          to={"/admin/dashboard"}
        />
        <SidebarBox
          to={"/admin/report"}
          text={"Report"}
          icon={<TbReport />}
        />
        <SidebarBox
          text={"Inventory"}
          to={"/admin/inventory"}
          icon={<MdOutlineInventory2 />}
        />
        <SidebarBox
          text={"Product"}
          to={"/admin/product"}
          icon={<TbBoxSeam />}
        />
        <SidebarBox
          text={"Category"}
          to={"/admin/category"}
          icon={<TbCategory2 />}
        />
        <SidebarBox
          text={"Employee"}
          to={"/admin/category"}
          icon={<IoIosPeople />}
        />
      </VStack>
      <SidebarBox text={"LogOut"} />
    </VStack>
  );
}
