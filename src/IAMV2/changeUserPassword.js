const AWS = require('aws-sdk')

const iam = new AWS.IAM()

const params = {
    NewPassword:'Os1234$$',
    OldPassword:'Mw1234$$'
}

iam.changePassword(params, (err, data) => {
    if(err) {
        console.log(err);
    }else {
        console.log(data);
    }
})