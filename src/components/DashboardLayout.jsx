import React from "react";
import Sidenav from "../components/Sidenav";
import Topnav from "../components/Topnav";
import { Flex, Box, Container, useDisclosure } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";

export default function DashboardLayout({ title, children }) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <Flex>
        <Box
          display={{
            base: "none",
            lg: "flex",
          }}
        >
          <Sidenav />
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1}>
          <Topnav onOpen={onOpen} title={title} />
          <Container maxW="70rem" bg="red">
            {children}
          </Container>
        </Box>
      </Flex>
    </div>
  );
}
