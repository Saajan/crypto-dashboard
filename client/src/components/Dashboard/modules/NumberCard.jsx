import React from 'react';
import CountUp from 'react-countup';
import { Card, Title, Numbers } from '../../../styles/dashboard'

export default (props) => {
    const { account } = props;

    if (Object.keys(account).length === 0) {
        return false
    };

    return (
        <>
            {account.map((coin) => {
                console.log(coin);
                return (<Card key={coin.key}>
                    <Title>{coin.key}</Title>
                    <Numbers>
                        <CountUp
                            end={coin.value}
                            decimals={18}
                        >
                        </CountUp>
                    </Numbers>
                </Card>)
            })}
        </>
    )
}