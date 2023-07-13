import { FaBars } from "react-icons/fa";
import {
  Box,
  HStack,
  Icon,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaUserTie } from "react-icons/fa";
export default function Topnav({ title, onOpen }) {
  return (
    <Box px="4" bg="white">
      <HStack h="16" justify="space-between" mx="auto" maxW="70rem">
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            lg: "none",
            base: "block",
          }}
        />
        <Heading fontWeight="medium" fontSize="28px">
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaUserTie} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}
