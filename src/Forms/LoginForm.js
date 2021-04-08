import React, { Component } from "react";
import axios from "axios";
import { Box, Button, FormHelperText, TextField } from "@material-ui/core";
import * as Yup from "yup";
import { Formik } from "formik";
import { Redirect } from "react-router-dom";
import { loginUser } from "../Redux/actions/userActions";
import { connect } from "react-redux";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ip: "",
      location: "",
    };
  }
  componentDidMount = () => {
    //AAccessing apikey from env
    // let apiKey = process.env.REACT_APP_API_KEY;
    //getting data from api that doesnt use api_key
    let request = {
      method: "GET",
      url: "http://www.geoplugin.net/json.gp",
    };
    axios(request).then((res) => {
      console.log(res);
      this.setState({
        ip: res.data.geoplugin_request,
        location: res.data.geoplugin_city,
      });
    });
  };
  render() {
    if (this.props.id_token) {
      //Open home page after successful login which we know happened if id_token isnt null
      return <Redirect to="/Home" />;
    } else {
      return (
        <Formik
          enableReinitialize
          initialValues={{
            email: "",
            password: "",
            ip: this.state.ip,
            device: "",
            location: this.state.location,
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Must be a valid email")
              .max(255)
              .required("Email is required"),
            password: Yup.string().max(255).required("Password is required"),
            ip: Yup.string().required("Ip is required"),
            device: Yup.string().min(7).max(255).required("Device is required"),
            location: Yup.string().required("Device is required"),
          })}
          onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
            try {
              //useraction called
              await this.props.loginUser({
                email: values.email,
                password: values.password,
                ip: values.ip,
                device: values.device,
                location: values.location,
              });
              setStatus({ success: true });
              setSubmitting(false);
            } catch (err) {
              console.error(err);
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values,
          }) => (
            <div style={{ textAlign: "center", marginTop: "10%" }}>
              <h1>Log In</h1>
              <form
                style={{ display: "inline-block" }}
                noValidate
                onSubmit={handleSubmit}
              >
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  autoFocus
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.device && errors.device)}
                  fullWidth
                  helperText={touched.device && errors.device}
                  label="Device"
                  margin="normal"
                  name="device"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.device}
                  variant="outlined"
                />
                <TextField
                  readOnly
                  error={Boolean(touched.ip && errors.ip)}
                  fullWidth
                  helperText={touched.ip && errors.ip}
                  label="Ip"
                  margin="normal"
                  name="ip"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={this.state.ip}
                  variant="outlined"
                />
                <TextField
                  readOnly
                  error={Boolean(touched.location && errors.location)}
                  fullWidth
                  helperText={touched.location && errors.location}
                  label="Location"
                  margin="normal"
                  name="location"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={this.state.location}
                  variant="outlined"
                />

                {errors.submit && (
                  <Box mt={3}>
                    <FormHelperText error>{errors.submit}</FormHelperText>
                  </Box>
                )}
                <Box mt={2}>
                  <Button
                    color="secondary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Log In
                  </Button>
                  <p style={{ color: "red", textAlign: "center" }}>
                    <br />
                    {this.props.errMsg}
                  </p>
                </Box>
              </form>
            </div>
          )}
        </Formik>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    id_token: state.user.id_token,
    //circulr bar loader
    is_loading: state.user.is_loading,
    //error message in case of failed login
    errMsg: state.user.message,
  };
};

export default connect(mapStateToProps, { loginUser })(LoginForm);
