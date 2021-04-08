import React, { Component } from "react";
import { Box, Button, Typography, Paper } from "@material-ui/core";
import icon from "../google-icon.svg";
class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Paper>
        <Box
          m={1}
          p={1}
          display="flex"
          justifyContent="left-align"
          alignItems="center"
        >
          <Box p={1}>
            <img
              src={icon}
              alt="Logo"
              style={{ height: "40px", width: "40px" }}
            />
          </Box>
          <Box p={1} flexGrow={1}>
            <Typography
              variant="body2"
              align="left"
              style={{ fontWeight: "bold", marginBottom: "15px" }}
            >
              {this.props.primary}
            </Typography>
            <Typography variant="body2" style={{ color: "gray" }} align="left">
              {this.props.secondary}
            </Typography>
          </Box>
          <Box p={1}>
            <Button
              style={{ backgroundColor: "orange", color: "white" }}
              size="medium"
              variant="contained"
              color="default"
              disableElevation
            >
              Enable
            </Button>
          </Box>
        </Box>
      </Paper>
    );
  }
}

export default Cards;
