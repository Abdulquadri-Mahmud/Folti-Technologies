import { VStack } from "@chakra-ui/react"
import Hero from "./Hero"
import WhoWeAre from "./WhoWeAre";
import Intro from "./Intro";
import Services from "./Services";
import AppShowcase from "./AppShowcase";

export default function HomeComponents () {
    return (
        <>
        <VStack>
        <Hero/>
        <Intro/>
        <WhoWeAre/>
        <Services/>
        <AppShowcase app={true}/>
        </VStack>
        </>
    )
}