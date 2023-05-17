// import pkg from 'aws-sdk';
// const { DynamoDB } = pkg;

const AWS = require('aws-sdk');
AWS.config.update({'region':'us-east-1'})
const dynamodb = new AWS.DynamoDB();

const params = {
  TableName: "employee",
  Item: {
    "id" : {
      "N": "2"
    },

    "name":{
      "S": "Mike"
    },

    "age":{
      "S": "23"
    },

    "dept":{
      "S": "HR"
    }
  }
}

dynamodb.putItem(params, (err, data) => {
  if(err) throw Error(err);

  console.log(data);
})