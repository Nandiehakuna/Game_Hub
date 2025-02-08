import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <HStack>
      <Image src={Logo} boxSize={10} />
      <Text>GameHub</Text>
    </HStack>
  );
}
