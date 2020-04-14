import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { List, ListItem, ListItemText, Typography, Divider, ListItemIcon } from '@material-ui/core';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import InfoIcon from '@material-ui/icons/Info';
import BarChartIcon from "@material-ui/icons/BarChart"
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <Box bgcolor="background.default">
        <Link to="/" style={{ textDecoration: 'none', color: "inherit" }}>
          <Typography variant="h4" noWrap color="textPrimary" style={{ padding: "2rem" }}>Automação</Typography>
        </Link>
        <List color="textPrimary">
          <Divider />
          <SidebarItem to="/dashboards" text="Dashboards"><BarChartIcon color="secondary" /></SidebarItem>
          <SidebarItem to="/algo" text="Algo"><AssignmentOutlinedIcon color="secondary" /></SidebarItem>
          <SidebarItem to="/sobre" text="Sobre o projeto"><InfoIcon color="secondary" /></SidebarItem>
        </List>
      </Box>
    );
  }
}

function SidebarItem(props) {
  return (
    <Link to={props.to} style={{ textDecoration: 'none', color: "inherit" }}>
      <ListItem button>
        <ListItemIcon>{props.children}</ListItemIcon>
        <ListItemText primary={<Typography color="textPrimary">{props.text}</Typography>} />
      </ListItem>
      <Divider />
    </Link>
  )
}