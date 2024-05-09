import { Box, Flex, Heading, Text, VStack, Image, Link, Container } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="brand.900" py={4}>
        <Flex justify="space-between" align="center" px={8}>
          <Heading as="h1" size="lg" color="white">Venture Capital Firm</Heading>
          <Flex as="nav">
            <Link px={4} color="white" href="#about">About Us</Link>
            <Link px={4} color="white" href="#portfolio">Portfolio</Link>
            <Link px={4} color="white" href="#team">Team</Link>
            <Link px={4} color="white" href="#contact">Contact</Link>
          </Flex>
        </Flex>
      </Box>
      <VStack spacing={8} py={12} as="main">
        <Box id="about" p={8}>
          <Heading as="h2" size="xl">About Us</Heading>
          <Image src="/images/about-us.jpg" alt="About Us" />
          <Text mt={4}>We invest in innovative companies with the potential to disrupt their industries and drive significant growth.</Text>
        </Box>
        <Box id="portfolio" p={8}>
          <Heading as="h2" size="xl">Portfolio Companies</Heading>
          <Image src="/images/portfolio.jpg" alt="Portfolio Companies" />
          <Text mt={4}>Our portfolio includes a diverse range of companies across various sectors, demonstrating our commitment to fostering innovation.</Text>
        </Box>
        <Box id="team" p={8}>
          <Heading as="h2" size="xl">Our Team</Heading>
          <Image src="/images/team.jpg" alt="Our Team" />
          <Text mt={4}>Our team comprises experienced professionals with deep industry knowledge and a proven track record in building successful businesses.</Text>
        </Box>
        <Box id="contact" p={8} bg="gray.100">
          <Heading as="h2" size="xl">Contact Information</Heading>
          <VStack spacing={3} mt={4}>
            <Link href="mailto:contact@vcfirm.com" isExternal><FaEnvelope /> contact@vcfirm.com</Link>
            <Link href="https://linkedin.com" isExternal><FaLinkedin /> LinkedIn</Link>
            <Link href="https://twitter.com" isExternal><FaTwitter /> Twitter</Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;