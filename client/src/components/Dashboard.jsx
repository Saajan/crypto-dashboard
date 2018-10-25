import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './Dashboard/Header';
import Sidebar from './Dashboard/Sidebar';
import Footer from './Dashboard/Footer';
import Main from './Dashboard/Main';
import Trade from './Dashboard/Trade';
import decode from 'jwt-decode';
import { DashboardWrapper } from '../styles/dashboard';


class Dashboard extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {

        const { requestAccountData,requestCurrentCoinPrice,requestBTCHistoricData, history } = this.props;

        const token = localStorage.getItem('token');
        let decoded = decode(token);
        if (decoded) {
            requestCurrentCoinPrice();
            requestBTCHistoricData();
            let userid = decoded.id;
            let encodedKey = encodeURIComponent('userid');
            let encodedValue = encodeURIComponent(userid);
            let formBody = encodedKey + "=" + encodedValue;
            requestAccountData({
                fields: formBody,
            });
        } else {
            history.push('/login');
        }
        
    };

    render() {
        console.log("account full render",this.props,this.state);
        return (
            <DashboardWrapper>
                <Header />
                <Sidebar />
                <Switch>
                    <Route path="/trade" component={Trade} />
                    <Route exact path="/" component={() => <Main {...this.props} />} />
                    <Route component={NoMatch} />
                </Switch>
                <Footer />
            </DashboardWrapper>)
    };
}

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

export default Dashboard;