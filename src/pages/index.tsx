import { Button, Input, VStack, Heading, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

const LoginPage = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/home");
  }
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
      bg="black"
      color="white"
    >
      <VStack
        className="bg-gradient-to-b from-stone-800 to-stone-950"
        gap={4}
        p={8}
        borderRadius="md"
        boxShadow="md"
        w="100%"
        maxW="sm"
      >
        <Heading size="lg">QG do Investidor</Heading>
        <Input placeholder="Email" type="email" _placeholder={{ color: "gray.400" }} />
        <Input placeholder="Senha" type="password" _placeholder={{ color: "gray.400" }} />
        <Button variant="surface" w="full" onClick={handleLogin}>Entrar</Button>
      </VStack>
    </Box>
  );
};

export default function Home() {
  return (
    <LoginPage />
  );
}
