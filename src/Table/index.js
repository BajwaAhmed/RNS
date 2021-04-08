import React, { Component } from "react";
import { Box, Divider, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Table from "react-bootstrap/Table";
class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Paper>
        <Box
          mt={1}
          p={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box p={1}>
            <h3>{this.props.title && this.props.title}</h3>
          </Box>
          <Box p={1}>
            <h6>{this.props.rightText && this.props.rightText}</h6>
          </Box>
        </Box>
        <Divider style={{ marginRight: "20px", marginLeft: "20px" }}></Divider>

        <Table style={{ height: "100px" }} className="table table-borderless">
          <thead>
            <tr>
              {Object.keys(this.props.data[0]).map((row) => {
                return (
                  <th className="align-left" scope="col">
                    {row}
                  </th>
                );
              })}
              {this.props.title === "Device Management" && (
                <th className="align-left" scope="col">
                  Delete
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((row) => {
              return (
                <tr>
                  {Object.values(row).map((elem) => {
                    return <td>{elem}</td>;
                  })}
                  {this.props.title === "Device Management" && (
                    <td>
                      <DeleteIcon />
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Paper>
    );
  }
}

export default Tables;
