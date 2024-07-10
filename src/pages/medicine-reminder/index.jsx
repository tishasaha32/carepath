import { Box, Text } from "@chakra-ui/react";
import Greeting from "./components/Greeting";
import Message from "./components/Message";
import Reminder from "./components/Reminder";

const MedicineReminder = () => {
  return (
    <Box m={2}>
      <Greeting />
      <Message />
      <Text m={3} mt={7} fontWeight={600}>
        Daily Review
      </Text>
      <Reminder />
      <Reminder />
      <Reminder />
      <Reminder />
      <Reminder />
    </Box>
  );
};

export default MedicineReminder;
