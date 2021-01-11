import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import IconDashboard from '@material-ui/icons/Dashboard';
import IconShoppingCart from '@material-ui/icons/ShoppingCart';
import IconPeople from '@material-ui/icons/People';
import IconBarChart from '@material-ui/icons/BarChart';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import EuroOutlinedIcon from '@material-ui/icons/EuroOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import MoneyOutlinedIcon from '@material-ui/icons/MoneyOutlined';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import DomainOutlinedIcon from '@material-ui/icons/DomainOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import GridOnOutlinedIcon from '@material-ui/icons/GridOnOutlined';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import AppMenuItem from './AppMenuItem';

const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: DashboardOutlinedIcon,
  },
  {
    name: 'Articles',
    Icon: AssignmentOutlinedIcon,
    items: [
      {
        name: 'Client',
      },
      {
        name: 'Supplier',
      },
      {
        name: 'Farmer',
      },
      {
        name: 'Product',
      },
    ],
  },
  {
    name: 'Stock',
    Icon: GridOnOutlinedIcon,
    items: [
      {
        name: 'By Supplier',
      },
      {
        name: 'By Client',
      },
    ],
  },
  {
    name: 'Dispatch Records',
    Icon: PlaylistAddCheckOutlinedIcon,
  },
  {
    name: 'Sales',
    Icon: MoneyOutlinedIcon,
  },
  {
    name: 'Cost Entry',
    Icon: EuroOutlinedIcon,
  },
  {
    name: 'Reports',
    Icon: TrendingUpOutlinedIcon,
  },
  {
    name: 'User Management',
    Icon: PeopleOutlinedIcon,
  },
  {
    name: 'Account Management',
    Icon: DomainOutlinedIcon,
    link: '/accounts',
  },
];

const AppMenu: React.FC = () => {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* <AppMenuItem {...appMenuItems[0]} /> */}
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
      ))}
    </List>
  );
};

const drawerWidth = 240;

const useStyles = makeStyles(theme =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
);

export default AppMenu;
