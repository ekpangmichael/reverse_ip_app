const ipAddressModel = require('../models/ipAddressModel');

exports.reverseAndStoreIP = async function(req, res) {
  const ipList = (req.headers['x-forwarded-for'] || '').split(',');
  const clientIp = ipList.length > 0 ? ipList[0].trim() : req.socket.remoteAddress.trim();

  console.log("Client IP: ", clientIp);
  const reversedIp = clientIp.split('.').reverse().join('.');

  try {
    await ipAddressModel.insertReversedIP(reversedIp);
    res.send(`Original IP: ${clientIp} - Reversed IP: ${reversedIp}`);
  } catch (err) {
    console.error(err); // It's a good practice to log the error for debugging purposes.
    res.status(500).send('Error saving the reversed IP');
  }
};
