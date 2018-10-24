import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import { Header, Logo, Toolbar, Heading,User } from '../../styles/header'

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:''
        }
    }

    componentWillMount(){
        this.setState({
            username : localStorage.getItem("user")
        })
    }

    render() {
        return (
            <Header>
                <Logo>
                    <Heading>Crypto Dashboard</Heading>
                </Logo>
                <Toolbar>
                    <User>{this.state.username}</User>
                    <Link to={{ pathname: `/logout` }}>
                        Log Out
                        </Link>
                </Toolbar>
            </Header>
        );
    }
}

export default withRouter(Navbar);