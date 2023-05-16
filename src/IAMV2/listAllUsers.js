const AWS = require('aws-sdk');

const iam = new AWS.IAM();
iam.listUsers((err, data)=>{
  if(err) throw Error(err);
  console.log(data)
})