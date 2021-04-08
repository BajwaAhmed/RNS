import React, { Component } from "react";
import {
  Box,
  Button,
  Divider,
  Paper,
  CircularProgress,
} from "@material-ui/core";
import MiniCard from "../MiniCard";
class BalanceDetails extends Component {
  render() {
    return (
      <Paper>
        <Box
          mt={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box p={2}>
            <h1>Balance Details</h1>
          </Box>
          <Box p={2}>
            <Button
              size="medium"
              variant="outlined"
              color="default"
              disableElevation
            >
              Submit verificaation Documents?
            </Button>
          </Box>
        </Box>
        <Divider></Divider>
        <Box
          m={1}
          p={6}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box p={1}>
            <MiniCard title="Account Balance" value="3232387634BTC" />
            <MiniCard title="Estimated Value" value="$323,238,7634" />
          </Box>
          <Box p={1} style={{ textAlign: "right" }} flexGrow={1}>
            <CircularProgress size={200} variant="determinate" value={75} />
          </Box>
          <Box p={1}>
            <MiniCard title="In Order" value="3232387634 BTC" />

            <MiniCard title="Available" value="$3232,387,634" />
          </Box>
        </Box>
      </Paper>
    );
  }
}

export default BalanceDetails;
