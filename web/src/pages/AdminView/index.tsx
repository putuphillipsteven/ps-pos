import { Grid, GridItem } from "@chakra-ui/react";
import SideBar from "./SideBar";
import { NavBar } from "../../component/NavBar";
import { useState } from "react";

export const AdminView = (props: any) => {
  const [day, setDay] = useState("");
  return (
    <Grid
      templateAreas={`
        "nav header"
        "nav main"
        "nav main"`}
      gridTemplateColumns={"14.75em 3fr"}
      gridTemplateRows={"3em 1fr 3em"}
      h={"100vh"}
      maxW={"100vw"}
      overflowY={"scroll"}
      gap={".5em"}
      bgColor={"#EEF1F2"}
      p={"0 1em 0 0"}
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <GridItem bg={"orange.300"} area={"nav"}>
        <SideBar />
      </GridItem>
      <GridItem area={"header"}>
        <NavBar day={day} setDay={setDay} />
      </GridItem>
      <GridItem area={"main"} p={"0 0 1em 0"}>
        {props.view}
      </GridItem>
    </Grid>
  );
};
