const AWS = require("aws-sdk");

const iam = new AWS.IAM();

const policy_document = {
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "*",
      "Resource":"*"
    }
  ]
}

const params = {
  PolicyDocument: JSON.stringify(policy_document),
  PolicyName: "newUserFullPolicy",
  Description: "This is my new full access policy"
}

iam.createPolicy(params, (err, data)=>{
  if(err) throw Error(err)

  console.log(data)
})

