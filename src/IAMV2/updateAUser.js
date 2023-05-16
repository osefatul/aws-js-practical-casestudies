const AWS = require('aws-sdk');

const iam = new AWS.IAM();
const params = {
  NewUserName: "John",
  UserName: "UpdatedJohn"
}

iam.updateUser(params, (err, data)=>{
  if(err) throw Error(err);
  console.log(data);
})