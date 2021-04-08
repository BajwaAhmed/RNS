import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { ExpandMore } from "@material-ui/icons";
import {
  AppBar,
  Box,
  Divider,
  Toolbar,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import icon from "../google-icon.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    height: 64,
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  link: {
    margin: "10px",
    fontWeight: theme.typography.fontWeightMedium,
    "& + &": {
      marginLeft: theme.spacing(2),
    },
    color: "white",
  },
  divider: {
    width: 1,
    height: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar style={{ backgroundColor: "#212121" }}>
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/Home">
          <img
            src={icon}
            alt="Logo"
            style={{ height: "25px", width: "25px" }}
          />
        </RouterLink>
        <Box flexGrow={1} />
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/app"
          underline="none"
          variant="body2"
        >
          Investment
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/docs"
          underline="none"
          variant="body2"
        >
          Trade
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/docs"
          underline="none"
          variant="body2"
        >
          Wallet
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/docs"
          underline="none"
          variant="body2"
        >
          History
        </Link>
        <Link
          className={classes.link}
          color="textSecondary"
          component={RouterLink}
          to="/docs"
          underline="none"
          variant="body2"
        >
          Support
        </Link>
        <Box flexGrow={1} />
        <Divider className={classes.divider} />
        <RouterLink to="/Home">
          <img
            src={icon}
            alt="Logo"
            style={{ height: "25px", width: "25px", marginRight: "10px" }}
          />
        </RouterLink>
        <Typography>My Profile</Typography>
        <ExpandMore />
        <Divider className={classes.divider} />
        <Typography>Language</Typography>
        <ExpandMore />
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
