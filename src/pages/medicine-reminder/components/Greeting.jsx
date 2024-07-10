import { Heading, Stack } from "@chakra-ui/react";

const Greeting = () => {
  return (
    <Stack spacing={0} m={3}>
      <Heading size="md">Hello,</Heading>
      <Heading size="md" fontWeight={400}>
        Bhaskar
      </Heading>
    </Stack>
  );
};

export default Greeting;
