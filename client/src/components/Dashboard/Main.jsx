import React, { Component } from 'react';
import NumberCard from './modules/NumberCard'

import { Main, CardWrapper, MainWrapper, Title, Numbers } from '../../styles/dashboard'

const MainComponent = (props) => {
    console.log("final", props);

    const { account: { accountUser: { account } } } = props;

    console.log(account);
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
            </MainWrapper>
        </Main>)

}

export default MainComponent;