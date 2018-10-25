
export const login = async (payload) => {
    try {
        //console.log(payload);
        let response = await fetch(`/api/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: payload,
        }).then((response)=>{
            return response.json();
        });

        console.log(response);

        return {
            ...response,
        };
    } catch (e) {
        console.log('catching in login api');
        return {
            isError: true,
        };
    }
};

export const register = async (payload) => {
    try {
        //console.log(payload);
        const response = await fetch(`/api/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: payload,
        }).then((response)=>{
            return response.json();
        });
        console.log(response);

        return {
            ...response,
        };
    } catch (e) {
        console.log('catching in login api');
        return {
            isError: true,
        };
    }
};

export const account = async (payload) => {
    try {
        //console.log(payload);
        const response = await fetch(`/api/getAccount`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: payload,
        }).then((response)=>{
            return response.json();
        });
        console.log(response);

        return {
            ...response,
        };
    } catch (e) {
        console.log('catching in account api');
        return {
            isError: true,
        };
    }
};

export const currentCoinPrice = async (payload) => {
    try {
        //console.log(payload);
        const response = await fetch(`/api/getCurrentPrice`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: payload,
        }).then((response)=>{
            return response.json();
        });
        //console.log(response);

        return {
            ...response,
        };
    } catch (e) {
        console.log('catching in coinlist api');
        return {
            isError: true,
        };
    }
};

export const BTCHistoricSaga = async (payload) => {
    try {
        //console.log(payload);
        const response = await fetch(`/api/getHistoricBTC`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: payload,
        }).then((response)=>{
            return response.json();
        });
        //console.log(response);

        return {
            ...response,
        };
    } catch (e) {
        console.log('catching in historic BTC api');
        return {
            isError: true,
        };
    }
};


