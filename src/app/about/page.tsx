import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import AboutCoponents from "@/app/components/AboutComponents/AboutComponents"
import HeroAbout from "@/app/components/AboutComponents/HeroAbout";
interface AboutProps {}

const About: React.FC<AboutProps> = ({}) => {
    return (
        <>
        <Flex>
            <HeroAbout/>
            {/* <AboutCoponents/> */}
        </Flex>
        </>
    )
}

export default About;