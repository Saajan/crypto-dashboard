import rp from 'request-promise';


export const getToken = (headers) => {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};


export const eachApiCall = (coinPair) => {
    return rp({
        url: `https://api.coinbase.com/v2/prices/${coinPair}/buy`,
        json: true
    }).then(function (obj) {
        return obj.data;
    });
};

export const getHistoricBTC = (coinPair, startTime, endTime) => {
    return rp({
        url: `https://api.pro.coinbase.com/products/${coinPair}/candles?start=${startTime}?stop=${endTime}?granularity=900`,
        headers: {
            'User-Agent': 'User Agent'
        },
        json: true
    }).then(function (obj) {
        console.log("obj",obj);
        return {
            success:true,
            historicBTC : obj
        };
    }).catch(function (err) {
        console.log("errr",err);
        return {
            success:false,
            msg : 'Get Historic for BTC API failed'
        };
    });
};