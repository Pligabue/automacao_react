import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import { List, ListItem, ListItemText, Typography, Divider, ListItemIcon, Icon } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import BarChartIcon from "@material-ui/icons/BarChart"
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <Box>
        <Link to="/" style={{ textDecoration: 'none', color: "inherit" }}>
          <Typography variant="h5" noWrap color="textPrimary" style={{ padding: "2rem" }}>Automação</Typography>
        </Link>
        <List color="textPrimary">
          <Divider />
          <SidebarItem to="/dashboards" text="Dashboards"><BarChartIcon color="secondary" /></SidebarItem>
          <SidebarItem to="/algo" text="Algo"><AssignmentOutlinedIcon color="secondary" /></SidebarItem>
          <SidebarItem to="/outracoisa" text="Outra Coisa"><CommentOutlinedIcon color="secondary" /></SidebarItem>
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