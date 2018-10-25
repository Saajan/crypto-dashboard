import React from 'react';
import CountUp from 'react-countup';
import { Card, Title, Numbers } from '../../../styles/dashboard'

export default (props) => {
    const { currentCoinPrice } = props;

    if (currentCoinPrice.length === 0) {
        return false
    };

    return (
        <>
            {currentCoinPrice.map((coin) => {
                console.log(coin);
                return (<Card key={`currentcoin${coin.base}`}>
                    <Title>{coin.base}</Title>
                    <Numbers>
                        <CountUp
                            end={coin.amount}
                        >
                        </CountUp>
                    </Numbers>
                </Card>)
            })}
        </>
    )
};