import {
  Box,
  Tag,
  Stack,
  HStack,
  Icon,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import {
  AiOutlineInfoCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";

export default function PortfolioSection() {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: "4",
        xl: "0",
      }}
    >
      <HStack
        spacing={{
          base: "4",
          xl: "16",
        }}
        align={{
          base: "flex-start",
          lg: "center",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          lg: "row",

          xl: "row",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium">
            ₹ 112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack
            spacing={4}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                ₹ 1,300.00
              </Text>
              <Tag colorScheme="gray">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposit</Button>
        <Button leftIcon={<Icon as={AiOutlineArrowUp} />}> Withdraw</Button>
      </HStack>
    </HStack>
  );
}
