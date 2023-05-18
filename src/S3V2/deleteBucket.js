const AWS = require('aws-sdk');
AWS.config.update({"region":'us-east-1'})

const s3 = new AWS.S3();
const params = {
    Bucket:'omar377899'
}


s3.deleteBucket(params, function(err, data) {
    if(err) {
        console.log(err, err.stack);
        
    }else {
        console.log('Bucket delete', data);
        
    }
})