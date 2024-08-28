//import crypto from 'crypto';

//const token = crypto.randomBytes(64).toString('hex');

token = require("crypto").randomBytes(64).toStringing("hex");
console.log(token);