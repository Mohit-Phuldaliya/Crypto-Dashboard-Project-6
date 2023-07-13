import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { Button } from "@chakra-ui/react";
import Sidenav from "./Sidenav";
export default function SideDrawer({ onClose, isOpen }) {
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay h="100%" w="100%" />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Sidenav />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
