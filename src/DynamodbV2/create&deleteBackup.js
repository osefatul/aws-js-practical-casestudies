const AWS = require('aws-sdk');
AWS.config.update({'region':'us-east-1'})
const dynamodb = new AWS.DynamoDB();

// const params = {
//     BackupName:'employeebackup',
//     TableName:'employee'
// }

// dynamodb.createBackup(params, function(err, data) {
//     if(err) {
//         console.log(err);
        
//     }else {
//         console.log(data);
        
//     }
// }) 



//delete backup
const params = {
    BackupArn:'arn:aws:dynamodb:us-east-1:371470469147:table/employee/backup/01684331189868-ddcc228e'
}

dynamodb.deleteBackup(params, function(err, data) {
    if(err) {
        console.log(err);
        
    }else {
        console.log(data);
        
    }
})

