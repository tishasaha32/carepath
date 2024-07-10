import {
  Button,
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import Title from "./components/Title";
import { CiPill } from "react-icons/ci";
import { GiPillDrop } from "react-icons/gi";
import { IoTimeSharp } from "react-icons/io5";

const AddMedicineReminder = () => {
  return (
    <Container>
      <Title />
      <Stack>
        <Text>Pills name</Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <CiPill color="#9B9B9B" />
          </InputLeftElement>
          <Input variant="filled" type="text" placeholder="pill name" />
        </InputGroup>

        <Text mt={3}>Amount & How Long?</Text>
        <Flex gap={2}>
          <InputGroup flex={7}>
            <InputLeftElement pointerEvents="none">
              <GiPillDrop color="#9B9B9B" />
            </InputLeftElement>
            <Input variant="filled" type="text" placeholder="amount" />
          </InputGroup>
          <Select placeholder="select" flex={3} variant="filled">
            <option value="pill">pill</option>
            <option value="ml">ml</option>
            <option value="gm">gm</option>
          </Select>
        </Flex>
        <Flex gap={2}>
          <InputGroup flex={7}>
            <InputLeftElement pointerEvents="none">
              <IoTimeSharp color="#9B9B9B" />
            </InputLeftElement>
            <Input variant="filled" type="text" placeholder="time" />
          </InputGroup>
          <Select placeholder="select" flex={3} variant="filled">
            <option value="7">7 days</option>
            <option value="15">15 days</option>
            <option value="30">30 days</option>
          </Select>
        </Flex>

        <Text mt={3}>Consume Time</Text>
        <Select placeholder="Select Time" variant="filled">
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="night">Night</option>
        </Select>
        <Select placeholder="Select Event" flex={3} variant="filled">
          <option value="before-food">Before Food</option>
          <option value="after-food">After Food</option>
        </Select>

        <Text mt={3}>Notification</Text>
        <Input placeholder="Select Date and Time" size="md" type="time" />

        <Button colorScheme="green" my={3} cursor="pointer">
          Create
        </Button>
      </Stack>
    </Container>
  );
};

export default AddMedicineReminder;
