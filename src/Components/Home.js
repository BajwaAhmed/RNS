import React, { Component } from "react";
import BalanceDetails from "../Components/BalanceDetails";
import Tables from "../Table";
import Cards from "../Card";
import { Grid } from "@material-ui/core";
import TopBar from "./TopBar";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table1: [
        {
          Device: "RNSols",
          Location: "Rawalpindi",
          Latest: "April",
          Ip_Address: "192.168.8.1",
        },
        {
          Device: "RNSols",
          Location: "Rawalpindi",
          Latest: "April",
          Ip_Address: "192.168.8.1",
        },
        {
          Device: "RNSols",
          Location: "Rawalpindi",
          Latest: "April",
          Ip_Address: "192.168.8.1",
        },
        {
          Device: "RNSols",
          Location: "Rawalpindi",
          Latest: "April",
          Ip_Address: "192.168.8.1",
        },
        {
          Device: "RNSols",
          Location: "Rawalpindi",
          Latest: "April",
          Ip_Address: "192.168.8.1",
        },
        {
          Device: "RNSols",
          Location: "Rawalpindi",
          Latest: "April",
          Ip_Address: "192.168.8.1",
        },
        {
          Device: "RNSols",
          Location: "Rawalpindi",
          Latest: "April",
          Ip_Address: "192.168.8.1",
        },
        {
          Device: "RNSols",
          Location: "Rawalpindi",
          Latest: "April",
          Ip_Address: "192.168.8.1",
        },
        {
          Device: "RNSols",
          Location: "Rawalpindi",
          Latest: "April",
          Ip_Address: "192.168.8.1",
        },
      ],
      table2: [
        {
          Time: "19/20/21 12:35:29",
          Ip_Address: "192.168.8.1",
          Location: "N/A",
        },
        {
          Time: "19/20/21 12:35:29",
          Ip_Address: "192.168.8.1",
          Location: "N/A",
        },
        {
          Time: "19/20/21 12:35:29",
          Ip_Address: "192.168.8.1",
          Location: "N/A",
        },
        {
          Time: "19/20/21 12:35:29",
          Ip_Address: "192.168.8.1",
          Location: "N/A",
        },
        {
          Time: "19/20/21 12:35:29",
          Ip_Address: "192.168.8.1",
          Location: "N/A",
        },
        {
          Time: "19/20/21 12:35:29",
          Ip_Address: "192.168.8.1",
          Location: "N/A",
        },
        {
          Time: "19/20/21 12:35:29",
          Ip_Address: "192.168.8.1",
          Location: "N/A",
        },
        {
          Time: "19/20/21 12:35:29",
          Ip_Address: "192.168.8.1",
          Location: "N/A",
        },
      ],
      cards: [
        {
          primary: "Google Authentication",
          secondary: "For login withdrawls and security modifications",
        },
        {
          primary: "SMS Authentication",
          secondary: "For login withdrawls and security modifications",
        },
        {
          primary: "Anti Phishing Phrase",
          secondary:
            "Add a special phrase to prevent phishing attempts from fake websites and email addresses",
        },
        {
          primary: "Withdrawl Addresses",
          secondary:
            "Save your withdrawl addresses and write memos for them. The whiteList function is for protecting your funds allowing withdrawls to whitelisted addresses",
        },
      ],
    };
  }
  render() {
    return (
      <div
        className="App"
        style={{
          backgroundColor: "#dfe1e5",
          padding: "15px",
          marginTop: "55px",
        }}
      >
        <TopBar />
        <Grid container spacing={2}>
          <Grid item xs={7}>
            <BalanceDetails />
            <Tables
              title="Device Management"
              rightText="These devices are currenntly allowed to access your devices"
              data={this.state.table1}
            ></Tables>
          </Grid>
          <Grid item xs={5}>
            {this.state.cards &&
              this.state.cards.map((row) => {
                return (
                  <Cards
                    primary={row.primary}
                    secondary={row.secondary}
                  ></Cards>
                );
              })}

            <Tables title="Login Record" data={this.state.table2}></Tables>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
