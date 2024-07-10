import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { FaPills } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import getColor from "../../../helper/getColor";
import { useNavigate } from "react-router-dom";

const Reminder = () => {
  const navigate = useNavigate();

  return (
    <Box background="#f8f8f6" w="95%" m={3} borderRadius="2xl" cursor="pointer">
      <Grid
        templateColumns="20px 1fr 20px"
        gap={4}
        py={2}
        px={4}
        alignItems="center"
        justifyContent="center"
        onClick={() => navigate("/add-medicine-reminder")}
      >
        <GridItem>
          <FaPills size={19} color={getColor()} />
        </GridItem>
        <GridItem>
          <Text fontSize="md" fontWeight={600}>
            Oxycodone
          </Text>
          <Text fontSize="xs" color="#9B9B9B">
            10:00 AM - Completed
          </Text>
        </GridItem>
        <GridItem>
          <FaChevronRight color="#9B9B9B" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Reminder;
