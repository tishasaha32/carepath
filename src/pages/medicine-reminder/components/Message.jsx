import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import img from "../../../../public/medicine-reminder/medicine.png";
const Message = () => {
  return (
    <Box bg="#f3f6c8" w="95%" h={120} margin="auto" borderRadius="xl">
      <Flex p="4">
        <Stack flex="6" h={100}>
          <Text fontSize="md" fontWeight={900} w="80%">
            Take your medicine on time
          </Text>
          <Text fontSize="xs">Health is wealth and peace 😄</Text>
        </Stack>
        <Box flex="4">
          <Image
            src={img}
            position="absolute"
            width="150px"
            top="25px"
            right="25px"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Message;
