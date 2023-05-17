const AWS = require('aws-sdk');
AWS.config.update({'region':'us-east-1'})
const dynamodb = new AWS.DynamoDB();

const params = {
    TableName:"employee"
}

dynamodb.deleteTable(params, function(err, data) {
    if(err) {
        console.log("can not delete", err);
        
    } else {
        console.log('table is delete', data);
        
    }
})