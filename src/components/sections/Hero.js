import React from 'react'
import { Flex, Stack, Heading, Button, Text, Box, Image } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import PropTypes from "prop-types";


export default function Hero(props) {
    const { title, subtitle, image, ctaLink, ctaText, ...rest } = props;
    console.log(props);
    return (
        <Flex
            align="center"
            justify={{ base: "center", md: "space-around", xl: "space-between"}}
            direction={{ base: "column-reverse", md: "row"}}
            wrap="no-wrap"
            minH="70vh"
            px={8}
            mb={16}
            {...rest}
        >
            <Stack
        
            >
                <Heading

                >
                    {title}
                </Heading>
                <Heading>
                    {subtitle}
                </Heading>
                <Link to={ctaLink}>
                    <Button>
                        {ctaText}
                    </Button>
                </Link>
                <Text>
                    No credit card required
                </Text>
            </Stack>
            <Box>
                <Image src={image} />
            </Box>
        </Flex>
    )
}


Hero.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    ctaText: PropTypes.string,
    ctaLink: PropTypes.string
}

Hero.defaultProps = {
    title: "React landing page with Chakra UI",
    subtitle:"This is the subheader section where you describe the basic benefits of your product",
    image: "https://source.unsplash.com/collection/404339/800x600",
    ctaText: "Create your account now",
    ctaLink: "/signup",
}