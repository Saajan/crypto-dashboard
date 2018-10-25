import React, { Component } from 'react';
import NumberCard from './modules/NumberCard';
import CurrentCoinPrice from './modules/CurrentCoinPrice';
import TimeseriesHistoric from './modules/TimeseriesHistoric';

import { Main, CardWrapper,CardWrapperFull, MainWrapper } from '../../styles/dashboard'

const MainComponent = (props) => {
    console.log("final", props);

    const { account: { account }, currentCoinPrice: { currentCoinPrice }, BTCHistoric: { BTCHistoric } } = props;

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
                <div>
                    <h4>BTC Historic data in USD</h4>
                    <CardWrapperFull>
                        <TimeseriesHistoric BTCHistoric={BTCHistoric} />
                    </CardWrapperFull>
                </div>
            </MainWrapper>
        </Main>)

}

export default MainComponent;