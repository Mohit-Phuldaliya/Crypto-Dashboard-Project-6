import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Tag, Text } from "@chakra-ui/react";

export default function InfoCard({ imgUrl, text, textTag, inverted }) {
  return (
    <CustomCard
      bgColor={inverted ? "p.purple" : "white"}
      bgImage={imgUrl}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Tag
        color={inverted ? "p.purple" : "white"}
        bg={inverted ? "white" : "p.purple"}
        borderRadius="full"
      >
        {textTag}
      </Tag>
      <Text
        color={inverted ? "white" : "p.purple"}
        mt="4"
        fontWeight="medium"
        textStyle="h5"
      >
        {text}
      </Text>
    </CustomCard>
  );
}
