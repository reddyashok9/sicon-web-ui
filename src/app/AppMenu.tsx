import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';

import IconDashboard from '@material-ui/icons/Dashboard';
import IconShoppingCart from '@material-ui/icons/ShoppingCart';
import IconPeople from '@material-ui/icons/People';
import IconBarChart from '@material-ui/icons/BarChart';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks';

import AppMenuItem from './AppMenuItem';

const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: IconDashboard,
  },
  {
    name: 'Articles',
    Icon: IconLibraryBooks,
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
    Icon: IconLibraryBooks,
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
    Icon: IconLibraryBooks,
  },
  {
    name: 'Sales',
    Icon: IconLibraryBooks,
  },
  {
    name: 'Cost Entry',
    Icon: IconLibraryBooks,
  },
  {
    name: 'Reports',
    Icon: IconLibraryBooks,
  },
  {
    name: 'User Management',
    Icon: IconLibraryBooks,
  },
  {
    name: 'Account Management',
    Icon: IconLibraryBooks,
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
