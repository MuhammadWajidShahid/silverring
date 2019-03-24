import React, { Fragment, Component } from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge, Drawer, List, ListItem, ListItemIcon, ListItemText, Grid } from "@material-ui/core"
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import { Dashboard as Dashboardicon, AddBox, Edit, Delete } from '@material-ui/icons';
import {Route,Link,Switch} from "react-router-dom";
import Addproduct from "./addproduct";
import Dashboard from "./dashboard";
import {connect} from "react-redux"


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },

  menuButton: {
    marginLeft: 12,
    marginRight: 18,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    // width:drawerWidth,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    // marginTop:"50px",
    ...theme.mixins.toolbar,
    float: "right",
  },
  griditem:{
marginTop:"3%",
  }

});


class Admin extends Component {
  state = {
    open: false,
    heading:"Dashboard",
    products:[],
  };
  

  handleDrawerOpen = () => {
    this.setState({ open: !this.state.open });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleheading=(heading)=>{
    this.setState({heading:heading})
  }

  render() {
    const { classes } = this.props;
    const {  badgecontent } = this.props;
    return (
      <div>
        <Fragment>
          <AppBar position="sticky" color="primary" className={classNames({ [classes.appBar]: !this.state.open })}
          >
            <Toolbar>
              <IconButton style={{ outline: "none" }} onClick={this.handleDrawerOpen}
                className={classes.menuButton}>
                <MenuIcon color="error"></MenuIcon>
              </IconButton>
              <Typography variant="h6" style={{ flex: "1", marginLeft: "40px" }}>
                {this.state.heading}
              </Typography>
              <IconButton style={{ outline: "none" }}>
                <Badge badgeContent={badgecontent} color="secondary">
                  <NotificationsIcon color="error" />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar >
          <Grid container style={{ justifyContent: 'center'}}>
            <Grid item >
              <Drawer variant="permanent"
                className={classNames(classes.drawer, {
                  [classes.drawerOpen]: this.state.open,
                  [classes.drawerClose]: !this.state.open,
                })}
                classes={{
                  paper: classNames({
                    [classes.drawerOpen]: this.state.open,
                    [classes.drawerClose]: !this.state.open,
                  }),
                }}
                open={this.state.open}>
                <Divider />

                <div className={classes.toolbar}>
                  <Typography variant="h5" style={{ marginRight: "20px" }} color="secondary">{this.state.heading}</Typography>
                  <IconButton onClick={this.handleDrawerClose}>
                    <ChevronLeftIcon />
                  </IconButton>
                </div>
                <Divider />
                <List >
                  <Link to="/admin/dashboard" key="0">
                  <ListItem button selected={(this.state.heading)==="Dashboard"?true:false}>
                    <ListItemIcon><Dashboardicon /> </ListItemIcon>
                    <ListItemText primary={"Dashboard"} />
                  </ListItem>
                  </Link>
                  <Link to="/admin/addproduct" key="1">
                  <ListItem button selected={(this.state.heading)==="Add Product"?true:false}>
                    <ListItemIcon><AddBox /> </ListItemIcon>
                    <ListItemText primary={"Add Products"} />
                  </ListItem>
                  </Link>
                  <ListItem button key="2">
                    <ListItemIcon><Edit /> </ListItemIcon>
                    <ListItemText primary={"Edit Products"} />
                  </ListItem>
                </List>
                <Divider />
              </Drawer>
            </Grid>
            <Grid item xs={10} lg={7} sm={8} md={8} className={classes.griditem}>
            <Switch>
            <Route exact path="/admin/addproduct" render={()=>(<Addproduct handleheading={this.handleheading}/>)}/>
            <Route exact path="/admin/dashboard" render={()=>(<Dashboard handleheading={this.handleheading} />)}/>
            <Route exact path="/admin" render={()=>(<Dashboard handleheading={this.handleheading} />)}/>           
            </Switch>
            </Grid>
          </Grid>
        </Fragment>
      </div>
    );
  }

}
export default connect()(withStyles(styles)(Admin));