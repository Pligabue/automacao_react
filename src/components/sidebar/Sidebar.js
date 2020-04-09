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
          <Link to="/dashboards" style={{ textDecoration: 'none', color: "inherit" }}>
            <ListItem button>
              <ListItemIcon><BarChartIcon color="secondary" /></ListItemIcon>
              <ListItemText primary={<Typography color="textPrimary">Dashboards</Typography>} />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/algo" style={{ textDecoration: 'none', color: "inherit" }}>
            <ListItem button>
              <ListItemIcon><AssignmentOutlinedIcon color="secondary" /></ListItemIcon>
              <ListItemText primary={<Typography color="textPrimary">Algo</Typography>} />
            </ListItem>
          </Link>
          <Divider />
          <Link to="/outracoisa" style={{ textDecoration: 'none', color: "inherit" }}>
            <ListItem button>
              <ListItemIcon><CommentOutlinedIcon color="secondary" /></ListItemIcon>
              <ListItemText primary={<Typography color="textPrimary">Outra Coisa</Typography>} />
            </ListItem>
          </Link>
        </List>
      </Box>
    );
  }
}
