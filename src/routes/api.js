import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import express from 'express';
const SECRET = process.env.SECRET;
var router = express.Router();
import getModels from '../models';

import {
  getToken,
  getHistoricBTC,
  eachApiCall
} from '../utils/helpers';
var User = require("../models/User");

router.post('/signup', async (req, res) => {
  let {
    username,
    password,
    email
  } = req.body;
  if (!username || !password || !email) {
    res.json({
      success: false,
      msg: 'Please enter username, password and email.'
    });
  } else {
    //console.log(req.body, models);
    const responsePromise = getModels().then(async (models) => {
      const userAlreadyExists = await models.user.findOne({
        where: {
          username,
        },
        raw: true
      });

      if (userAlreadyExists) {
        return {
          success: false,
          msg: "User already exist."
        }
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const user = await models.user.create({
        username,
        password: hashedPassword,
        email
      }, {
        raw: true
      });

      if (user) {

        const account = await models.account.create({
          userId: user.id,
        }, {
          raw: true
        });

        return {
          success: true,
          msg: "User registration successful."
        };
      }
    });

    responsePromise.then(data => {
      res.json(data);
    });
  }
});

router.post('/signin', async (req, res) => {
  let {
    username,
    password
  } = req.body;

  if (!username || !password) {
    res.json({
      success: false,
      msg: 'Please enter username and password.'
    });
  }

  const responsePromise = getModels().then(async (models) => {
    const user = await models.user.findOne({
      where: {
        username,
      },
      raw: true,
    });

    if (!user) {
      // user with provided username not found
      return {
        success: false,
        msg: 'User name does not exist.',
      };
    }

    console.log(user);

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      // bad password
      return {
        success: false,
        msg: 'Wrong password',
      };
    }

    console.log(valid);

    const token = jwt.sign({
      id: user.id
    }, SECRET, {
      expiresIn: 86400 // expires in 24 hours
    });

    if (valid) {
      return {
        success: true,
        username: user.username,
        token
      }
    }
  });

  responsePromise.then(data => {
    res.json(data);
  });
});

router.post('/getAccount', async (req, res) => {
  const responsePromise = getModels().then(async (models) => {

    console.log(req.body);

    let {
      userid,
    } = req.body;

    if (!userid) {
      res.json({
        success: false,
        msg: 'Account id missing'
      });
    }

    const account = await models.account.findOne({
      where: {
        userid
      },
      attributes: ['BTC', 'ETH', 'BCH', 'ETC', 'LTC'],
      raw: true,
    });

    console.log("account", account);

    if (account) {
      return {
        success: true,
        account: Object.entries(account).map(([key, value]) => ({
          key,
          value
        }))
      }
    } else {
      return {
        success: false,
        msg: "Account Missing"
      }
    }

  });

  responsePromise.then(data => {
    res.json(data);
  }).catch(e => {
    console.log(e);
  });

})


router.post('/getCurrentPrice', async (req, res) => {

  let currencyList = ['BTC-USD', 'ETH-USD', 'BCH-USD', 'ETC-USD', 'LTC-USD'];

  const promises = await currencyList.map((p) => {
    return eachApiCall(p);
  });

  Promise.all(promises).then((response) => {
    res.json({
      currentCoinPrice: response,
      success: true
    });
  }).catch(() => {
    res.json({
      success: false,
      msg: "Current Coin Price API failed."
    });
  });
  //https: //api.coinbase.com/v2/prices/BTC-USD/buy
});

router.post('/getHistoricBTC', async (req, res) => {

  const response = await getHistoricBTC('BTC-USD', '2018-07-10T12:00:00', '2018-07-15&12:00:00');
  res.json(response)

});

module.exports = router;