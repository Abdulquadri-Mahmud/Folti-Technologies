import { Box, Flex, Grid, GridItem, Text, useBreakpointValue } from "@chakra-ui/react";

const HeroAbout = () => {
  return (
    <Box>
      <Flex
        w={"full"}
        bg={"blue.900"}
        mt={"5%"}
        h={"auto"}
        p={20}
        textAlign={"center"}
        justifyContent={"center"}
      >
        <Flex flexDirection={"column"} w={{ base: "auto", md: "50%" }}>
          <Text
            as={"header"}
            fontWeight={100}
            fontSize={{ base: "12", md: "20" }}
            color={"white"}
          >
            {" "}
            About
          </Text>
          <Text color={"white"} fontSize={"2.5em"}>
            We love to make great things, things that matter.
          </Text>
          <Text color={"white"} mt={2} fontSize={12} as={"abbr"} textAlign={"center"} letterSpacing={.2} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            ipsa fuga excepturi, beatae fugit numquam laboriosam, similique
            fugiat asperiores odit ab. Sed veritatis perferendis doloremque.
            Inventore vel tempore deleniti unde.
          </Text>
        </Flex>
      </Flex>

      <Box  mt={-20} px={12}>
      <Grid
        // Defines three equal-width columns
      gap={6} // Sets the gap between grid items
      
    >
      {/* Grid items */}
      <GridItem bg={"green.400"}>Item 1</GridItem> {/* Spans across 3 columns */}
      <GridItem bg={"purple.200"} h={40}>Item 2</GridItem>
      <GridItem bg={"orange.400"}>Item 3</GridItem>
      <GridItem bg={"green.200"}>Item 4</GridItem>
      <GridItem bg={"yellow.400"}>Item 5</GridItem>
      <GridItem bg={"red.300"}>Item 6</GridItem>
    </Grid>
      </Box>
    </Box>
  );
};

export default HeroAbout;
