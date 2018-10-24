import React, { Component } from 'react';
import CountUp from 'react-countup';

import { Main, Card, MainWrapper, Title, Numbers } from '../../styles/dashboard'

const MainComponent = (props) => {
    console.log("final", props);

    const { account: { accountUser: { account: { BTC, ETH, BCH, ETC, LTC } } } } = props;
    return (
        <Main>
            <h2>Dashboard</h2>
            <MainWrapper>
                <Card>
                    <Title>BTC</Title>
                    <CountUp
                        end={BTC}
                        decimals={18}
                    >
                    </CountUp>
                </Card>
                <Card>
                    <Title>ETH</Title><CountUp
                        end={ETH}
                        decimals={18}
                    >
                    </CountUp></Card>
                <Card>
                    <Title>BCH</Title><CountUp
                        end={BCH}
                        decimals={18}
                    >
                    </CountUp></Card>
                <Card><Title>ETC</Title><CountUp
                    end={ETC}
                    decimals={18}
                >
                </CountUp></Card>
                <Card><Title>LTC</Title><CountUp
                    end={LTC}
                    decimals={18}
                >
                </CountUp></Card>
            </MainWrapper>
        </Main>)

}

export default MainComponent;
