import { Box, Button, Flex, Heading, Image, Text, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import phone from "../../../../public/Hold-phone.png"
// import Image from "next/image";

interface AppShowcaseProp {
app: boolean
}
const AppShowcase: React.FC<AppShowcaseProp> = ({app}) => {
    return (
        <>
        <Box width={"full"} p={{base:3, md: 12}}>
        <Flex
        direction={{ base: "column", md: "row" }}
        w={'full'} 
        h={"full"} 
        bg={'green.600'} 
        justify={'flex-end'} 
        rounded={20}
        boxShadow={20}
        // overflow={"hidden"}
        >
            <Flex  w={{base: "full", md: "100%"}} p={12} direction={"column"} gap={10} >
                <Heading as={Text} color={"white"} fontWeight={"bold"}>
                    Request in Seconds, ride in minutes
                </Heading>
                <Text color={"white"} fontWeight={"semi-bold"}>Available on iOS and Android</Text>
                <Button rounded={20} w={"50%"}>Get the App</Button>
            </Flex>
            <Box objectFit={"contain"}  alignItems={"center"}>
            <Image src={"/mobile.webp"}  alt="hand" width={"70%"}/>
            </Box>
        </Flex>
        </Box>
        </>
    )
}

export default AppShowcase;