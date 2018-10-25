import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Menu, MenuItem, MenuLink } from '../../styles/sidebar'


export default () => (
    <Navbar>
        <Menu>
            <MenuItem>
                <Link to={{ pathname: `/` }} >
                    <MenuLink>Home</MenuLink>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to={{ pathname: `/trade` }} >
                    <MenuLink>Trade</MenuLink>
                </Link>
            </MenuItem>
        </Menu>
    </Navbar>);