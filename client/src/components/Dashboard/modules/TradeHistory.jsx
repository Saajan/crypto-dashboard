import React, { Component } from 'react';
import { Table, Divider, Badge } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { requestAccountData, requestCurrentCoinPrice, requestBTCHistoricData, requestTransactionData } from '../../../actions/actionCreator';

const columns = [{
    title: 'Coin',
    dataIndex: 'coin',
    key: 'coin',
}, {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
}, {
    title: 'Price per Coin',
    dataIndex: 'price',
    key: 'price',
}, {
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance',
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
            <a href="javascript:;">Buy</a>
            <Divider type="vertical" />
            <a href="javascript:;">Sell</a>
        </span>
    ),
}];


class TradeHistory extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            tableData: []
        }
    }

    componentWillMount() {
        console.log("sell buy", this);

        const tableData = [];
        const { account: {
            account
        },currentCoinPrice:{ currentCoinPrice } } = this.props;

        account.map((coin) => {
            let coinDetails ={}
            coinDetails.coin = coin.key;
            coinDetails.quantity = coin.value;
            tableData.push(coinDetails);
        })

        this.setState({
            tableData: account
        });
    }
    render() {
        return (<Table pagination={false}  columns={columns} dataSource={this.state.tableData} />);
    }
}

const mapStateToProps = state => {
    return ({
        login: state.login,
        account: state.account,
        currentCoinPrice: state.currentCoinPrice,
        transaction: state.transaction
    })
};

export default connect(mapStateToProps, null)(TradeHistory);