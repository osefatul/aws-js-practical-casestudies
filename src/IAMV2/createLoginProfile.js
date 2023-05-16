//When user is created through AWS-SDK and you want to enable them to login into console, you have to setup a password for them...

const AWS = require('aws-sdk');
const iam = new AWS.IAM();

const params = {
  Password:'Mypassword2',
  PasswordResetRequired:true,
  UserName:'John'
}

iam.createLoginProfile(params, function(err, data) {
  if(err) {
      console.log(err);
      
  } else {
      console.log(data);
      
  }
})