import "./App.css";
import Home from "./Components/Home";
import SignupForm from "./Forms/SignupForm";
import LoginForm from "./Forms/LoginForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
// import { firstTimeLoad } from "./Redux/actions/userActions";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    console.log(process.env.REACT_APP_API_KEY);
    //on reloading dont go back to login page but get data from local storage but i have commented it out because signup api was having some issues
    // this.props.firstTimeLoad();
  };
  render() {
    return (
      //Router for 3 pages Signup,login and Home
      <Router>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route default path="/Signup" component={SignupForm} />
          <Route path="/Login" component={LoginForm} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {
  // firstTimeLoad,
})(App);
