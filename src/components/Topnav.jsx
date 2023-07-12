import { FaBars } from "react-icons/fa";
import {
  Box,
  Stack,
  HStack,
  Icon,
  Text,
  Heading,
  Image,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
} from "@chakra-ui/react";
import { FaUserTie } from "react-icons/fa";
export default function Topnav({ title, onOpen }) {
  return (
    <Box px="4" boxShadow="xl">
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
