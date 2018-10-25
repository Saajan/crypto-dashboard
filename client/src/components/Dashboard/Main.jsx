import React, { Component } from 'react';
import NumberCard from './modules/NumberCard';
import CurrentCoinPrice from './modules/CurrentCoinPrice';

import { Main, CardWrapper, MainWrapper } from '../../styles/dashboard'

const MainComponent = (props) => {
    console.log("final", props);

    const { account: { account } , currentCoinPrice: { currentCoinPrice } } = props;

    return (
        <Main>
            <h2>Dashboard</h2>
            <MainWrapper>
                <div>
                    <h4>Balance</h4>
                    <CardWrapper>
                        <NumberCard account={account} />
                    </CardWrapper>
                </div>
                <div>
                    <h4>Current Coin Price in USD</h4>
                    <CardWrapper>
                        <CurrentCoinPrice currentCoinPrice={currentCoinPrice} />
                    </CardWrapper>
                </div>
            </MainWrapper>
        </Main>)

}

export default MainComponent;