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
import { Link } from "react-router-dom";

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
      bg="white"
      justify="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      ww={{
        base: "full",
        lg: "16rem",
      }}
      h="100vh"
    >
      <Box>
        <Image
          mt="6"
          mx="auto"
          align="center"
          src="/Images/cryptologo.png"
          alt="cryptologo"
          boxSize="80px"
        />
        <Heading align="center" fontSize="20px" as="h1" pt="1rem">
          Mohit Crypto
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
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
                <Icon as={nav.icon} />
                <Text fontWeight="medium" fontSize="14px">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <Link to={"/support"}>
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
        </Link>
      </Box>
    </Stack>
  );
}
