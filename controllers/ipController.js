const ipAddressModel = require('../models/ipAddressModel');

exports.reverseAndStoreIP = async function(req, res) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;

  console.log("THIS IS THE IP",ip);
  const reversedIp = ip.split('.').reverse().join('.');

  try {
    await ipAddressModel.insertReversedIP(reversedIp);
    res.send(`Original IP: ${ip} - Reversed IP: ${reversedIp}`);
  } catch (err) {
    res.status(500).send('Error saving the reversed IP');
  }
};
