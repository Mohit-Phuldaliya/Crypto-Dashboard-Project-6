import React from "react";
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
export default function Topnav() {
  return (
    <Box boxShadow="xl">
      <HStack h="16" justify="space-between" p="32px" mx="auto" maxW="80rem">
        <Heading fontWeight="medium" fontSize="28px">
          Dashboard
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
