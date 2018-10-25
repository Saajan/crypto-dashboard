import React, { Component } from 'react';
import moment from 'moment';

import { AreaChart, Area, XAxis, YAxis, Line, Bar, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default (props) => {

    let { BTCHistoric } = props;

    console.log('historic', props.BTCHistoric);

    if (BTCHistoric.length === 0) {
        return false
    };

    let chartData = [];
    BTCHistoric.map((eachHistoric) => {
        let obj = {};
        obj.xAxis = eachHistoric[0];
        obj.yAxis1 = eachHistoric[1];
        obj.yAxis2 = eachHistoric[2];
        obj.volume = eachHistoric[5];
        chartData.push(obj);
    })

    return (
        <ResponsiveContainer width={'100%'} height={400}>
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <YAxis />
                <Tooltip />
                <XAxis
                    dataKey='xAxis'
                    scale='time'
                    domain={['dataMin', 'dataMax']}
                    tickFormatter={(tick) => moment(tick * 1000).format('MMM DD')}
                    name='Time'
                    type='number'
                />
                <Area type="monotone" name="Low" dataKey="yAxis1" stroke="#82ca9d" fillOpacity={1} />
                <Line type="monotone" name="High" dataKey="yAxis2" stroke="#00FF00" fillOpacity={1} />
                {/** <Bar type="monotone" dataKey="volume" stroke="#DA2A04" fillOpacity={1} fill="url(#coloryAxis3)"/>*/}

            </AreaChart>
        </ResponsiveContainer>
    );
}

