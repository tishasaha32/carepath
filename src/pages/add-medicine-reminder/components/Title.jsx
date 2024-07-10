import { Box, Heading } from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Title = () => {
  const navigate = useNavigate();

  return (
    <Box my={3}>
      <Box
        background="#f8f8f6"
        w="40px"
        h="40px"
        borderRadius="xl"
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={() => navigate("/medicine-reminder")}
      >
        <IoMdArrowBack color="#9B9B9B" size={24} />
      </Box>
      <Heading fontSize="2xl" my={3}>
        Add Plan
      </Heading>
    </Box>
  );
};

export default Title;

// #9B9B9B
