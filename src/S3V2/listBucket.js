const AWS = require('aws-sdk');
const s3 = new AWS.S3();
AWS.config.update({"region":'us-east-1'})


s3.listBuckets(function(err, data) {
    if(err) {
        console.log(err, err.stack);
    }else {
        console.log(data['Buckets']);
    }
})