import {
  Box,
  Stack,
  HStack,
  Icon,
  Text,
  Heading,
  Image,
} from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

export default function Sidenav() {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      h={{
        base: "100%",
        lg: "100vh",
      }}
    >
      <Box>
        <Image
          mt="6"
          mx="auto"
          align="center"
          src="/Images/cryptologo.png"
          alt="cryptologo"
          boxSize="50px"
        />
        <Heading align="center" fontSize="20px" as="h1" pt="1rem">
          Mohit <br></br> Crypto Dashboard
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <HStack
              borderRadius="10px"
              key={nav.text}
              py="3"
              px="4"
              color="#797E82"
              _hover={{
                bg: "#F3F3F7",
                color: "#171717",
              }}
            >
              <Icon as={nav.icon} />
              <Text fontWeight="medium" fontSize="14px">
                {nav.text}
              </Text>
            </HStack>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <HStack
          borderRadius="10px"
          py="3"
          px="4"
          color="#797E82"
          _hover={{
            bg: "#F3F3F7",
            color: "#171717",
          }}
        >
          <Icon as={BiSupport} />
          <Text fontWeight="medium" fontSize="14px">
            Support
          </Text>
        </HStack>
      </Box>
    </Stack>
  );
}
