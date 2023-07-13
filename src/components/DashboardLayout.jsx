import React from "react";
import Sidenav from "../components/Sidenav";
import Topnav from "../components/Topnav";
import { Flex, Box, Container, useDisclosure, calc } from "@chakra-ui/react";
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
          <Container
            overflow="hidden"
            overflowX="hidden"
            overflowY="auto"
            h="calc(100vh - 88px)"
            mt="6"
            maxW="70rem"
            sx={{
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {children}
          </Container>
        </Box>
      </Flex>
    </div>
  );
}
