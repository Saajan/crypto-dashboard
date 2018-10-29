import React, { Component } from 'react';

import { Main , Card ,MainWrapper } from '../../styles/dashboard'

import TradeHistory from './modules/TradeHistory';


export default () => (
    <Main>
        <h2>Trade</h2>
        <MainWrapper>
            <TradeHistory />
        </MainWrapper>
    </Main>
);