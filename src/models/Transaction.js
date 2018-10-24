export default function (sequelize, DataTypes) {
    const Transaction = sequelize.define('transaction', {
        userId: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        type: {
            type: DataTypes.ENUM,
            values: ['SELL', 'BUY']
        },
        coin: {
            type: DataTypes.ENUM,
            values: ['BTC', 'ETH', 'BCH', 'LTC', 'ETC']
        },
        before: {
            type: DataTypes.REAL,
        },
        quantity: {
            type: DataTypes.REAL,
        },
        after: {
            type: DataTypes.REAL,
        },
    },{
        paranoid: true
    });

    Transaction.associate = (models) => {
        Transaction.belongsTo(models.user);
    }

    return Transaction;
}