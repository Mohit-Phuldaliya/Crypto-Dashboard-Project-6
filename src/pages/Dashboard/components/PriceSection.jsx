import {
  Box,
  Tag,
  Stack,
  HStack,
  Icon,
  Text,
  Button,
  Image,
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export default function PriceSection() {
  const timestamps = ["7:15 PM", "7:55 PM", "8:15 PM", "9:55 PM", "10:15 PM"];
  return (
    <CustomCard h="full">
      <Flex justify="space-between" align="start">
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
                ₹ 1,300.00
              </Text>
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="sm" fontWeight="medium">
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="5px">
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{
                  bg: "white",
                }}
                key={tab}
                fontSize="sm"
                borderRadius="4"
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image src="/Images/graph.png" mt="3rem" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
}
