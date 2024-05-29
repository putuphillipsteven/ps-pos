import {
  Box,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { IconButton } from "@chakra-ui/react";
import {
  FaPlusCircle,
  FaMinusCircle,
} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Spacer } from "@chakra-ui/react";
import useCounter from "../ProductCard/useCounter";
import { useState, useEffect } from "react";
//ts-ignore
import * as toRupiah from "@develoka/angka-rupiah-js";

export default function ProductInCart(props: any) {
  const [count, increment, decrement, reset] = useCounter(
    props.qty
  );
  const [totalPPrice, setTotalPPrice] = useState(
    props.product_price * props.qty
  );
  useEffect(() => {
    setTotalPPrice(props.qty * props.product_price);
  }, [
    totalPPrice,
    setTotalPPrice,
    props.qty,
    count,
    increment,
    decrement,
  ]);

  const plus = (id: number) => {
    props?.setCart(
      props?.cart.map((el: any) => {
        if (el?.id === id) {
          console.log(el.id === id);
          return {
            ...el,
            qty: el.qty + 1,
          };
        } else {
          return el;
        }
      })
    );
    props?.setTotalQty(props?.totalQty + 1);
    setTotalPPrice(props?.qty * props?.product_price);
    increment();
    props?.setTotal(props?.total + props?.product_price);
  };

  const minus = (id: number) => {
    props?.setCart(
      props?.cart.map((el: any) => {
        if (el?.id === id) {
          return {
            ...el,
            qty: el.qty - 1,
          };
        } else {
          return el;
        }
      })
    );
    props?.setTotalQty(props?.totalQty - 1);
    setTotalPPrice(totalPPrice - props?.product_price);
    decrement();
    props?.setTotal(props?.total - props?.product_price);
  };

  const handleDelete = (id: number) => {
    props?.setTotal(props?.total - totalPPrice);
    props?.setTotalPpn(props?.totalPpn - totalPPrice);
    props?.setTotalQty(props?.totalQty - props?.qty);
    props?.setCart(
      props?.cart.filter((el: any) => el.id !== id)
    );
    // reset();
  };

  return (
    <HStack boxShadow={"sm"} borderRadius={"0.5em"}>
      <Box>
        <Image
          src={`${
            import.meta.env.VITE_APP_API_IMAGE_URL
          }/product/${props?.image}`}
          borderRadius={"0.5em"}
          boxSize={"5em"}
        />
      </Box>
      <VStack align={"stretch"} spacing={"0"}>
        <Text fontWeight={"400"}>{props.product_name}</Text>
        <Text fontWeight={"400"}>{`${
          props.qty
        } X ${toRupiah(props.product_price)}`}</Text>
        <Text display={props?.display}>
          Sum : {toRupiah(totalPPrice)}
        </Text>
      </VStack>
      <Spacer />
      <VStack align={"stretch"}>
        <HStack spacing={"0"} display={props?.display}>
          <IconButton
            aria-label="Minus"
            icon={<FaMinusCircle />}
            variant={"ghost"}
            size={"md"}
            onClick={() => {
              count > 1 ? minus(props?.id) : null;
            }}
          />
          <IconButton
            aria-label="Plus"
            icon={<FaPlusCircle />}
            variant={"ghost"}
            size={"md"}
            onClick={() => {
              count !== 100 ? plus(props?.id) : null;
            }}
          />
          <IconButton
            aria-label="Delete"
            icon={<MdDelete />}
            size={"md"}
            variant={"ghost"}
            onClick={() => {
              handleDelete(props?.id);
              setTotalPPrice(0);
              // props.setTotal(0);
            }}
          />
        </HStack>
      </VStack>
    </HStack>
  );
}
