const AWS = require('aws-sdk')
const iam = new AWS.IAM()


const params = {
  PolicyArn:"arn:aws:iam::371470469147:policy/newUserFullPolicy",
  UserName:"Mike"
}

iam.detachUserPolicy(params , (err, data) => {
    if(err) {
        console.log(err, err.stack);
        
    }else {
        console.log(data);
        
    }
})