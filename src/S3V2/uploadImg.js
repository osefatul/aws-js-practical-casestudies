const AWS = require('aws-sdk');
const fs = require('fs');
AWS.config.update({"region":'us-east-1'})
const s3 = new AWS.S3();

const uploadImage = (fileName) => {
    const fileContent = fs.readFileSync(fileName);

    const params = {
        Bucket:'public-testing-buc',
        ACL:'public-read',
        Key:'aws.png',
        Body:fileContent
    };

    s3.putObject(params, function(err, data) {
        if(err) {
            console.log(err);
        }else {
            console.log(data);
        }
    })
}


uploadImage('aws.png');