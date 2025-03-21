import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";
import Link from "next/link";

const HomePage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      bgImage="url('/mountains.jpg')"
      bgSize="cover"
      color="white"
    >
      <Box position="absolute" top={0} left={0} right={0} bottom={0} bg="rgba(0, 0, 0, 0.7)" />

      <VStack 
        className="bg-gradient-to-b from-stone-800 to-stone-950"
        gap={6} 
        p={8} 
        borderRadius="md" 
        boxShadow="md" 
        w="100%" 
        maxW="lg" 
        zIndex={1}
      >
        <Heading size="2xl">Bem-vindo ao QG do Investidor</Heading>
        <Text fontSize="xl" textAlign="center" color="gray.400">
          Aqui você encontra as melhores soluções para otimizar seus investimentos.
        </Text>
        <Link href="/login">
          <Button variant="surface" colorScheme="whiteAlpha" w="full">
            Acesse sua conta
          </Button>
        </Link>
        <Link href="/about">
          <Button variant="surface" colorScheme="whiteAlpha" w="full">
            Saiba mais
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default HomePage;
