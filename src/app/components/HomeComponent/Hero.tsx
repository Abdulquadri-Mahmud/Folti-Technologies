'use client'

import React from 'react'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  Button,
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export default function Hero() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Go wherever, whenever',
      text: "Bolt is the all-in-one mobility app. Get picked up by a top-rated driver in minutes and enjoy a comfortable ride to wherever you’re going; or skip the traffic entirely on one of our industry-leading scooters.",
      image:
        'https://images.pexels.com/photos/1252807/pexels-photo-1252807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Design Projects 2',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      title: 'Design Projects 3',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.pexels.com/photos/1468419/pexels-photo-1468419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ]

  return (
    <Box position={"relative"} width={'full'} overflow={'hidden'} className='h-[80vh] mt-16 containers'>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
       <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Left Icon */}
      <IconButton aria-label="left-arrow" variant="ghost" position="absolute" left={side} top={top} transform={'translate(0%, -50%)'} zIndex={2} onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" className='bg-slate-200 rounded'/>
      </IconButton>

      {/* Right Icon */}
      <IconButton aria-label="right-arrow" variant="ghost" position="absolute" right={side} top={top} transform={'translate(0%, -50%)'} zIndex={2} onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" className='bg-slate-200 rounded'/>
      </IconButton>

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box justifyContent={'center'} alignItems={'center'} key={index} height={'6xl'} backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${card.image})`} className='h-[80vh]'>
              <Box position="absolute" top={0} left={0} w="full" h="full" bg="#0f0f0f" opacity={0.5} bgBlendMode="multiply"/>
              {/* This is the block you need to change, to customize the caption */}
              <Flex justifyContent={'start'} paddingLeft={{base: '2vh', md: '20vh'}} paddingTop={{base: '22vh', md: '26vh'}} h={'full'}>
                <Box h='400px' w={{base: '100%', md: '40%'}} >
                  <Stack spacing={6} w={'full'} maxW={'100%'} >
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} zIndex={20} color={'white'}>
                      {card.title}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} zIndex={20} color='white'>
                      {card.text}
                    </Text>
                    <Stack direction={'row'}>
                      <Button bg='Green' rounded={'full'} color={'white'} _hover={{ bg: 'dGreen' }}>
                        Show me more
                      </Button>
                      <Button bg={'whiteAlpha.300'} rounded={'full'} color={'white'} _hover={{ bg: 'whiteAlpha.500' }}>
                        Show me more
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Flex>
              {/* <Container h="full" w='full' className=' contentWrapper'>
              </Container> */}
          </Box>
        ))}
      </Slider>
    </Box>
  )
}