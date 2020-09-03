import React, {Component} from "react";
import { withTheme } from "styled-components";
import { Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Image, NavLink } from "react-bootstrap";

import "./CustomSwitch.css"
import darkMoonLogo from "../images/moon-dark.png";
import lightMoonLogo from "../images/moon-light.png";

const AntSwitch = withStyles((theme) => ({
    root: {
      width: 31.5,
      height: 18,
      padding: 0,
      marginTop: 5,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(14px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.dark,
          borderColor: theme.palette.primary.dark,
        },
      },
    },
    thumb: {
      width: 14,
      height: 14,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 18 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);

class CustomSwitch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.theme.mode === 'dark' ? true : false
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange = name => event => {
        this.setState( { checked :  !this.state.checked });
        this.props.toggleClick();
    };

    render() {
        return (
          <>
          <NavLink className="moon">
            <Image className="moon-img"
              src={this.props.theme.mode === 'dark' ? darkMoonLogo : lightMoonLogo } 
              onClick={this.handleChange("checked")}
              rounded fluid />
          </NavLink>

          <NavLink>
            <AntSwitch checked={this.state.checked} 
              onClick={this.handleChange("checked")}/> 

          </NavLink>
          </>
        );

    };
}


export default withTheme(CustomSwitch);