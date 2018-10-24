import React, { Component } from 'react';

import { Footer, Coinlist, Coin } from '../../styles/footer'


class FooterComponent extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            BTC: 0,
            BTCUP:false,
            ETH: 0,
            ETHUP:false,
            BCH: 0,
            BCHUP:false,
            ETC: 0,
            ETCUP:false,
            LTC: 0,
            LTCUP:false,
        };
    }


    componentWillMount() {
        setInterval(() => {
            this.setState(prevState => ({
                BTC: Math.floor(Math.random() * (1000 - 100) + 100) / 100,
                BTCUP: Math.random() >= 0.5,
                ETH: Math.floor(Math.random() * (1000 - 100) + 100) / 100,
                ETHUP: Math.random() >= 0.5,
                BCH: Math.floor(Math.random() * (1000 - 100) + 100) / 100,
                BCHUP: Math.random() >= 0.5,
                ETC: Math.floor(Math.random() * (1000 - 100) + 100) / 100,
                ETCUP: Math.random() >= 0.5,
                LTC: Math.floor(Math.random() * (1000 - 100) + 100) / 100,
                LTCUP: Math.random() >= 0.5,
            }));
        }, 5000);
    }


    render() {
        return (<Footer>
            <Coinlist>
                <Coin>BTC: <span style={{color : this.state.BTCUP ? '#F23C50' : '#068587'}}>{this.state.BTC}%</span></Coin>
                <Coin>ETH: <span style={{color : this.state.ETHUP ? '#F23C50' : '#068587'}}>{this.state.ETH}%</span></Coin>
                <Coin>BCH: <span style={{color : this.state.BCHUP ? '#F23C50' : '#068587'}}>{this.state.BCH}%</span></Coin>
                <Coin>ETC: <span style={{color : this.state.ETCUP ? '#F23C50' : '#068587'}}>{this.state.ETC}%</span></Coin>
                <Coin>LTC: <span style={{color : this.state.LTCUP ? '#F23C50' : '#068587'}}>{this.state.LTC}%</span></Coin>
            </Coinlist>
            <span>
                &copy; 2018.
        </span>
        </Footer>);
    }
};

export default FooterComponent;