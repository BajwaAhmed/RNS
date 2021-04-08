import React, { Component } from "react";
import { Typography } from "@material-ui/core";
class MiniCard extends Component {
  render() {
    return (
      <div style={{ marginTop: "15px", marginBottom: "25px" }}>
        <Typography align="left" style={{ color: "gray", fontSize: "15px" }}>
          <span
            style={{ marginRight: "4px", color: "orange", fontSize: "25px" }}
          >
            ■
          </span>
          {this.props.title}
        </Typography>
        <Typography
          style={{ fontWeight: "bold", fontSize: "20px" }}
          align="left"
        >
          {this.props.value}
        </Typography>
      </div>
    );
  }
}

export default MiniCard;
